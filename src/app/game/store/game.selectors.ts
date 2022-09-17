import { createSelector } from '@ngrx/store';
import { Letter, LetterInfo } from '../word.models';
import { selectCurrentWordIndex, selectGameLetters, selectGameWords, selectRemainingWordIndices } from './game.reducer';

const getCurrentWord = (gameWords: string[], currentWordIndex: number | null) => currentWordIndex !== null ? gameWords[currentWordIndex] : null;
export const selectCurrentWord = createSelector(selectGameWords, selectCurrentWordIndex, getCurrentWord);

const getGameLettersWithInfo = (gameLetters: Letter[], currentIndex: number | null, remainingIndices: number[]): LetterInfo[] =>
  gameLetters.map( (letter, i) => ({
    letter,
    correct: !remainingIndices.includes(i),
    current: i === currentIndex
  }));
export const selectGameLettersWithInfo =
  createSelector(selectGameLetters, selectCurrentWordIndex, selectRemainingWordIndices, getGameLettersWithInfo);
