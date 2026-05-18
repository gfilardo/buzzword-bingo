import { Board } from './board.component';
import { Scoreboard } from './scoreboard.component';
import { Room, selfId } from './room';
import { vocabularies } from './vocabularies';
import type { Participant } from './types';

// --- DOM refs ---
const lobbyEl = document.querySelector('#lobby') as HTMLElement;
const gameEl = document.querySelector('#game') as HTMLElement;
const nameInput = document.querySelector('#name-input') as HTMLInputElement;
const roomInput = document.querySelector('#room-input') as HTMLInputElement;
const vocabSelect = document.querySelector('#vocab-select') as HTMLSelectElement;
const playBtn = document.querySelector('#play-btn') as HTMLButtonElement;
const randomRoomBtn = document.querySelector('#random-room-btn') as HTMLButtonElement;
const lobbyError = document.querySelector('#lobby-error') as HTMLElement;
const gameTitle = document.querySelector('#game h2') as HTMLElement;
const roomLabel = document.querySelector('#room-label') as HTMLElement;
const selfLabel = document.querySelector('#self-label') as HTMLElement;
const shareLinkEl = document.querySelector('#share-link') as HTMLAnchorElement;
const shareLinkText = document.querySelector('#share-link-text') as HTMLElement;
const shareLinkCopied = document.querySelector('#share-link-copied') as HTMLElement;

// --- Populate vocab selector ---
vocabularies.forEach(v => {
  const opt = document.createElement('option');
  opt.value = v.key;
  opt.textContent = v.label;
  vocabSelect.appendChild(opt);
});

// --- Pre-fill from URL ---
const params = new URLSearchParams(location.search);
const urlRoom = params.get('room');
const urlVocab = params.get('vocab');
const isCreator = !urlRoom || params.get('creator') === '1';

if (urlRoom) {
  roomInput.value = urlRoom;
  if (!isCreator) roomInput.disabled = true;
}
if (urlVocab) {
  vocabSelect.value = urlVocab;
  if (!isCreator) vocabSelect.disabled = true;
}

randomRoomBtn.addEventListener('click', () => {
  roomInput.value = Math.random().toString(36).slice(2, 8).toUpperCase();
});

playBtn.textContent = isCreator ? 'Create' : 'Join';

// --- Components ---
const board = new Board(document.querySelector('#board') as HTMLElement);
const scoreboard = new Scoreboard(document.querySelector('#scoreboard') as HTMLElement);

// --- Game state ---
const participants: Record<string, Participant> = {};
let myId = '';
let roomVocabKey = '';
let room: Room | null = null;
let stateReceived = false;

function renderScoreboard() {
  scoreboard.render(participants, myId);
}

function buildShareUrl(roomCode: string, vocabKey: string): string {
  const url = new URL(location.href);
  url.searchParams.set('room', roomCode);
  url.searchParams.set('vocab', vocabKey);
  url.searchParams.delete('creator');
  return url.toString();
}

function pushCreatorUrl(roomCode: string, vocabKey: string) {
  const url = new URL(location.href);
  url.searchParams.set('room', roomCode);
  url.searchParams.set('vocab', vocabKey);
  url.searchParams.set('creator', '1');
  history.replaceState(null, '', url);
}

// --- Play ---
playBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const roomCode = roomInput.value.trim().toUpperCase();
  const vocabKey = vocabSelect.value;

  if (!name) { lobbyError.textContent = 'Please enter your name.'; return; }
  if (!roomCode) { lobbyError.textContent = 'Please enter a room code.'; return; }
  lobbyError.textContent = '';

  const vocabulary = vocabularies.find(v => v.key === vocabKey)!;
  roomVocabKey = vocabKey;

  if (isCreator) pushCreatorUrl(roomCode, vocabKey);

  // Transition to game screen
  lobbyEl.hidden = true;
  gameEl.hidden = false;

  const confirmLeave = () => confirm('Leave the game? You\'ll lose your current board.');
  gameTitle.style.cursor = 'pointer';
  gameTitle.addEventListener('click', () => {
    if (confirmLeave()) location.href = location.pathname;
  });
  window.addEventListener('beforeunload', e => { e.preventDefault(); });
  roomLabel.textContent = `Room: ${roomCode}`;
  selfLabel.textContent = name;

  const shareUrl = buildShareUrl(roomCode, vocabKey);
  shareLinkText.textContent = shareUrl;

  let copyTimeout: ReturnType<typeof setTimeout>;
  shareLinkEl.addEventListener('click', () => {
    navigator.clipboard.writeText(shareUrl);
    shareLinkText.hidden = true;
    shareLinkCopied.hidden = false;
    clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      shareLinkCopied.hidden = true;
      shareLinkText.hidden = false;
    }, 2000);
  });

  // Connect to room
  room = new Room(roomCode);
  myId = selfId;

  board.initializeWithVocabulary(vocabulary.words, roomCode + myId);

  participants[myId] = { id: myId, name, markedCount: 0, hasBingo: false };
  renderScoreboard();

  // Board mark → broadcast
  board.addEventListener('mark', ((e: CustomEvent) => {
    const { markedCount, hasBingo } = e.detail;
    participants[myId].markedCount = markedCount;
    participants[myId].hasBingo = hasBingo;
    renderScoreboard();
    room!.broadcastMark({ name, markedCount, hasBingo });
  }) as EventListener);

  // Peer announces themselves → add to scoreboard + send them state
  room.addEventListener('peer-join-msg', ((e: CustomEvent) => {
    const { peerId, name: peerName } = e.detail;
    participants[peerId] = { id: peerId, name: peerName, markedCount: 0, hasBingo: false };
    renderScoreboard();
    room!.sendStateTo(peerId, { vocabularyKey: roomVocabKey, participants: { ...participants } });
  }) as EventListener);

  // Receive room state when joining an existing room
  room.addEventListener('state', ((e: CustomEvent) => {
    if (stateReceived) return;
    stateReceived = true;
    const { participants: peers } = e.detail as { vocabularyKey: string; participants: Record<string, Participant> };
    for (const p of Object.values(peers)) {
      if (p.id !== myId) participants[p.id] = p;
    }
    renderScoreboard();
  }) as EventListener);

  // Peer marks a word → update scoreboard (name included as fallback if join was missed)
  room.addEventListener('peer-mark', ((e: CustomEvent) => {
    const { peerId, name: peerName, markedCount, hasBingo } = e.detail;
    if (!participants[peerId]) {
      participants[peerId] = { id: peerId, name: peerName, markedCount: 0, hasBingo: false };
    }
    participants[peerId].markedCount = markedCount;
    participants[peerId].hasBingo = hasBingo;
    renderScoreboard();
  }) as EventListener);

  // Peer disconnects → remove from scoreboard
  room.addEventListener('peer-left', ((e: CustomEvent) => {
    delete participants[e.detail.peerId];
    renderScoreboard();
  }) as EventListener);

  // When a new WebRTC connection is established, introduce ourselves directly.
  // broadcastJoin() below fires before connections exist, so this covers latecomers
  // and the case where signaling completes after the initial broadcast.
  room.addEventListener('peer-connected', ((e: CustomEvent) => {
    room!.sendJoinTo(e.detail.peerId, { name });
  }) as EventListener);

  // Initial broadcast (catches peers already connected when we join)
  room.broadcastJoin({ name });
});
