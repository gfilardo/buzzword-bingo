import { Vocabulary } from "./types";

export class VocabularySelector extends EventTarget {

  private selectedVocabulary: Vocabulary;

  constructor(private selectedVocabularyKey: string, private vocabularies: Vocabulary[], private rootElement: HTMLElement) {
    super();
    this.setVocabulary(selectedVocabularyKey);
    this.render();
    this.initializeListeners();
  }

  render() {
    this.rootElement.innerHTML = `
      <select class="selector">
        ${ this.vocabularies.reduce((acc, voc) => { return `${acc}<option value="${voc.key}" ${ voc.key === this.selectedVocabularyKey ? 'selected' : '' }>${voc.label}</option>`}, '') }
      </select>
      <p>Vocabulary size: ${ this.selectedVocabulary.words.length }</p>
      <textarea readonly>${ this.selectedVocabulary.words.sort().join(', ') }</textarea>
    `;
  }

  setVocabulary(vocabularyKey: string) {
    this.selectedVocabularyKey = vocabularyKey;
    this.selectedVocabulary = this.vocabularies.find(voc => voc.key === vocabularyKey) as Vocabulary;
    this.render();
  }

  initializeListeners() {
    this.rootElement.addEventListener('change', (e) => {
      const vocabularyKey = e.target.value;
      this.dispatchEvent(new CustomEvent('change', { detail: { vocabulary: vocabularyKey } } ));
      this.setVocabulary(vocabularyKey);
    });
  }

}
