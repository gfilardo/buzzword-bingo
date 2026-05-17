import { joinRoom, selfId } from '@trystero-p2p/torrent';
import type { Room as TrysteroRoom } from '@trystero-p2p/torrent';
import type { Participant } from './types';

export { selfId };

export type MarkPayload = { name: string; markedCount: number; hasBingo: boolean };
export type JoinPayload = { name: string };
export type StatePayload = { vocabularyKey: string; participants: Record<string, Participant> };

export class Room extends EventTarget {
  private _room: TrysteroRoom;
  private _sendMark: (data: MarkPayload, targetPeers?: string | string[]) => Promise<void[]>;
  private _sendJoin: (data: JoinPayload, targetPeers?: string | string[]) => Promise<void[]>;
  private _sendState: (data: StatePayload, targetPeers?: string | string[]) => Promise<void[]>;

  constructor(roomCode: string) {
    super();
    this._room = joinRoom({ appId: 'buzzword-bingo-v1' }, roomCode);

    const [sendMark, getMark] = this._room.makeAction<MarkPayload>('mark');
    const [sendJoin, getJoin] = this._room.makeAction<JoinPayload>('join');
    const [sendState, getState] = this._room.makeAction<StatePayload>('state');

    this._sendMark = sendMark;
    this._sendJoin = sendJoin;
    this._sendState = sendState;

    getMark((data, peerId) =>
      this.dispatchEvent(new CustomEvent('peer-mark', { detail: { ...data, peerId } })));
    getJoin((data, peerId) =>
      this.dispatchEvent(new CustomEvent('peer-join-msg', { detail: { ...data, peerId } })));
    getState((data, _peerId) =>
      this.dispatchEvent(new CustomEvent('state', { detail: data })));

    this._room.onPeerJoin(peerId =>
      this.dispatchEvent(new CustomEvent('peer-connected', { detail: { peerId } })));
    this._room.onPeerLeave(peerId =>
      this.dispatchEvent(new CustomEvent('peer-left', { detail: { peerId } })));
  }

  broadcastMark(data: MarkPayload) { this._sendMark(data); }
  broadcastJoin(data: JoinPayload) { this._sendJoin(data); }
  sendJoinTo(peerId: string, data: JoinPayload) { this._sendJoin(data, peerId); }
  sendStateTo(peerId: string, data: StatePayload) { this._sendState(data, peerId); }

  getPeerIds(): string[] { return Object.keys(this._room.getPeers()); }
}
