import type { Participant } from './types';

export class Scoreboard {
  constructor(private rootElement: HTMLElement) {
    this.rootElement.innerHTML = '<h3>Players</h3><ul class="scoreboard-list"></ul>';
  }

  render(participants: Record<string, Participant>, selfId: string) {
    const sorted = Object.values(participants)
      .sort((a, b) => b.markedCount - a.markedCount);

    this.rootElement.innerHTML = `
      <h3>Players</h3>
      <ul class="scoreboard-list">
        ${sorted.map(p => `
          <li class="scoreboard-entry${p.id === selfId ? ' self' : ''}${p.hasBingo ? ' bingo' : ''}">
            <span class="player-name">${escapeHtml(p.name)}${p.id === selfId ? ' (you)' : ''}</span>
            <span class="player-score">${p.markedCount}/24${p.hasBingo ? ' — BINGO!' : ''}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
