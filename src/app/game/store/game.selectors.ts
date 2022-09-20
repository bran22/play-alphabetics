import { createSelector } from '@ngrx/store';
import { GameStatus } from '../game.utils';
import { Letter, GameWordDetails } from '../word.models';
import { selectCurrentWordIndex, selectGameEnded, selectGameLetters, selectGameStarted, selectGameWords, selectInvalidWordIndices, selectRemainingWordIndices } from './game.reducer';

const getGameStatus = (started: boolean, ended: boolean): GameStatus => ({started, ended});
export const selectGameStatus = createSelector(selectGameStarted, selectGameEnded, getGameStatus);

const getCurrentWord = (gameWords: string[], currentWordIndex: number | null) => currentWordIndex !== null ? gameWords[currentWordIndex] : null;
export const selectCurrentWord = createSelector(selectGameWords, selectCurrentWordIndex, getCurrentWord);

const getGameWordDetails = (gameWords: string[], gameLetters: Letter[], currentIndex: number | null, remainingIndices: number[], invalidIndices: number[]): GameWordDetails[] =>
  gameWords.map( (word, i) => ({
    word,
    firstLetter: gameLetters[i],
    correct: !invalidIndices.includes(i) && !remainingIndices.includes(i),
    current: i === currentIndex,
    invalid: invalidIndices.includes(i)
  }));
export const selectGameWordDetails =
  createSelector(selectGameWords, selectGameLetters, selectCurrentWordIndex, selectRemainingWordIndices, selectInvalidWordIndices, getGameWordDetails);
