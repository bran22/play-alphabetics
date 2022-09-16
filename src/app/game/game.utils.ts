import { Letter, WordList } from './words';

export const getGameLetters = (startingLetterIndex: number, alphabet: Letter[]) => alphabet.slice(startingLetterIndex, startingLetterIndex + 10);
const getRandomWord = (words: string[]): string => words[Math.floor(Math.random() * words.length)];
export const getGameWords = (gameLetters: Letter[], allWords: WordList): string[] => {
  return gameLetters
    .map( letter => allWords[letter] )
    .map( getRandomWord );
}
