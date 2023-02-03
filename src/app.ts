import { Board } from "./board.component";
import { Vocabulary } from "./types";
import { vocabularies } from "./vocabularies";
import { VocabularySelector } from "./vocabulary_selector.component";

const DEFAULT_VOCABULARY_KEY = 'architecture';
let selectedVocabularyKey = DEFAULT_VOCABULARY_KEY;
const selectVocabulary = key => vocabularies.find(voc => voc.key === key) as Vocabulary;
let selectedVocabulary = selectVocabulary(selectedVocabularyKey);

const board = new Board(selectedVocabulary.words, document.querySelector('#board'));
const vocabularySelector = new VocabularySelector(DEFAULT_VOCABULARY_KEY, vocabularies, document.querySelector('#vocabularySelector'));

vocabularySelector.addEventListener('change', (e) => {
    selectedVocabularyKey = e.detail.vocabulary;
    selectedVocabulary = selectVocabulary(selectedVocabularyKey);
    board.initializeWithVocabulary(selectedVocabulary.words);
});