export type Vocabulary = {
  key: string;
  label: string;
  words: string[];
};

export type Participant = {
  id: string;
  name: string;
  markedCount: number;
  hasBingo: boolean;
};