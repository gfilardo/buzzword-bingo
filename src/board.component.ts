import { makeSeededRandom } from './seeded-random';

const randomWords = (num: number, vocabulary: string[], rand: () => number = Math.random) => {
  const pool = [...vocabulary];
  const selection: string[] = [];
  while (num-- > 0) {
    const i = Math.floor(rand() * pool.length);
    selection.push(pool.splice(i, 1)[0]);
  }
  return selection;
};

interface Cell {
  word: string;
  bonus: boolean;
  selected: boolean;
}

const winningSequences = (cells: Cell[]) => {
  const winSequences: number[][] = [];
  const isWinning = (idxs: number[]) => idxs.every(i => cells[i].selected || cells[i].bonus);
  const seq = (start: number, step: number, len = 5) =>
    Array.from({ length: len }, (_, i) => start + i * step);

  for (let r = 0; r < 5; r++) if (isWinning(seq(r * 5, 1))) winSequences.push(seq(r * 5, 1));
  for (let c = 0; c < 5; c++) if (isWinning(seq(c, 5))) winSequences.push(seq(c, 5));
  if (isWinning(seq(0, 6))) winSequences.push(seq(0, 6));
  if (isWinning(seq(20, -4))) winSequences.push(seq(20, -4));
  return winSequences;
};

const winningCells = (seqs: number[][]): number[] => [...new Set(seqs.flat())];

export class Board extends EventTarget {
  private cells: Cell[] = [];

  constructor(private rootElement: HTMLElement) {
    super();
    this.initializeListeners();
  }

  render() {
    this.rootElement.innerHTML = `
      <div class="board-grid">
        ${this.cells.map((c, i) => `
          <div data-i="${i}" class="cell${c.bonus ? ' bonus' : ''}${c.selected ? ' selected' : ''}">
            <span class="word">${c.word}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  initializeListeners() {
    this.rootElement.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.cell') as HTMLElement | null;
      if (!target) return;
      const index = parseInt(target.dataset['i'] ?? '');
      const cell = this.cells[index];
      if (!cell || cell.bonus) return;

      cell.selected = !cell.selected;
      target.classList.toggle('selected');

      const winCells = winningCells(winningSequences(this.cells));
      this.rootElement.querySelectorAll('.cell').forEach((el, i) => {
        el.classList.toggle('winning', winCells.includes(i));
      });

      const markedCount = this.cells.filter(c => c.selected && !c.bonus).length;
      const hasBingo = winCells.length > 0;
      this.dispatchEvent(new CustomEvent('mark', { detail: { markedCount, hasBingo } }));
    });
  }

  initializeWithVocabulary(vocabulary: string[], seed?: string) {
    const rand = seed ? makeSeededRandom(seed) : Math.random;
    const words = randomWords(24, vocabulary, rand);
    this.cells = words.map(word => ({ word, bonus: false, selected: false }));
    this.cells.splice(12, 0, { word: 'FREE', bonus: true, selected: true });
    this.render();
  }
}
