export const randomWords = (num: number, vocabulary: string[]) => {
  const pool = [...vocabulary];
  const selection = [];
  while (num-- > 0) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const [element] = pool.splice(randomIndex, 1);
    selection.push(element);
  }
  return selection
};

interface Cell {
  word: string;
  bonus: boolean;
  selected: boolean;
};

const winningSequences = (cells: Cell[]) => {
  const winSequences = [];
  const isWinningSequence = (indexes: number[]) => indexes.every(i => cells[i].selected || cells[i].bonus);
  const createSequence = (initialIndex: number, offsetMultiplier: number, count = 5) => {
    const seq = [];
    for (let i = 0; i < count; i++) {
      seq.push(initialIndex + i*offsetMultiplier);
    }
    return seq;
  };
  for (let r = 0; r < 5; r++) {
    const rowSeq = createSequence(r * 5, 1);
    if (isWinningSequence(rowSeq)) {
      winSequences.push(rowSeq);
    }
  }
  for (let c = 0; c < 5; c++) {
    const colSeq = createSequence(c, 5);
    if (isWinningSequence(colSeq)) {
      winSequences.push(colSeq);
    }
  }
  const diagSeq1 = createSequence(0, 6);
  if (isWinningSequence(diagSeq1)) {
    winSequences.push(diagSeq1);
  }
  const diagSeq2 = createSequence(20, -4);
  if (isWinningSequence(diagSeq2)) {
    winSequences.push(diagSeq2);
  }
  return winSequences;
};

const winningCells = (winSeqs: number[][]): number[] => [...new Set(winSeqs.flat())];


export class Board {

  private cells: Cell[];

  constructor(vocabulary: string[], private rootElement: HTMLElement) {
    this.initializeWithVocabulary(vocabulary);
    this.initializeListeners();
  }

  render() {
    // debugger
    this.rootElement.innerHTML = `
    <div class="board-grid">
    ${
      this.cells.reduce((acc, c, i) => {
        return acc + `
        <div data-i='${i}' data-row="${Math.floor(i / 5)}" data-col="${ i % 5 }" class="cell ${c.bonus ? 'bonus': ''}"><span class="word">${c.word}</span></div>
        `;
      }, '')
    }
    </div>
    `;
  }

  initializeListeners() {
    this.rootElement.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if ( !target.classList.contains('cell') ) {
        return;
      }
      const index = parseInt(target.dataset['i'] || '');
      const cell = this.cells[index];
      if (!cell || this.cells[index].bonus) {
        return;
      }
      cell.selected = !cell.selected;
      target.classList.toggle('selected');
      const winCells = winningCells(winningSequences(this.cells));
      [...this.rootElement.querySelectorAll('.cell')].forEach((el, i) => {
        el.classList.toggle('winning', winCells.includes(i));
      });
    });
  }

  clean() {
    this.cells.forEach(c => c.selected = false);
    this.render();
  }

  initializeWithVocabulary(vocabulary: string[]) {
    const words = randomWords(24, vocabulary);
    this.cells = words.map(word => ({ word, bonus: false, selected: false }));
    this.cells.splice(12, 0, { word: 'bonus', bonus: true, selected: true });
    this.render();
  }

};