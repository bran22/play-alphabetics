import { createSelector } from '@ngrx/store';
import { Letter, LetterInfo } from '../word.models';
import { selectCurrentWordIndex, selectGameLetters, selectGameWords, selectRemainingWordIndices } from './game.reducer';

const getCurrentWord = (gameWords: string[], currentWordIndex: number) => gameWords[currentWordIndex];
export const selectCurrentWord = createSelector(selectGameWords, selectCurrentWordIndex, getCurrentWord);

const getGameLettersWithInfo = (gameLetters: Letter[], currentIndex: number, remainingIndices: number[]): LetterInfo[] =>
  gameLetters.map( (letter, i) => ({
    letter,
    correct: !remainingIndices.includes(i),
    current: i === currentIndex
  }));
export const selectGameLettersWithInfo =
  createSelector(selectGameLetters, selectCurrentWordIndex, selectRemainingWordIndices, getGameLettersWithInfo);
