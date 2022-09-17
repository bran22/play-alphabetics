import { Letter, WordList } from './word.models';

export const getGameLetters = (startingLetterIndex: number, alphabet: Letter[]) => alphabet.slice(startingLetterIndex, startingLetterIndex + 10);

const getRandomWord = (words: string[]): string => words[Math.floor(Math.random() * words.length)];

export const getGameWords = (gameLetters: Letter[], allWords: WordList): string[] => {
  return gameLetters
    .map( letter => allWords[letter] )
    .map( getRandomWord );
};

export const findNextRemainingIndex = (remainingIndices: number[], currentIndex: number | null) => {
  if (currentIndex === null || remainingIndices.length === 0) {
    return null;
  } else if (currentIndex >= Math.max(...remainingIndices)) {
    // wrap around if we've exceeded the max
    return remainingIndices[0];
  } else {
    // normal case: get the next index that is remaining
    const found = remainingIndices.findIndex( i => i === currentIndex );
    return remainingIndices[found + 1];
  }
}
