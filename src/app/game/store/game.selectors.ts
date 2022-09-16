import { createSelector } from '@ngrx/store';
import { selectCurrentWordIndex, selectGameWords } from './game.reducer';

const getCurrentWord = (gameWords: string[], currentWordIndex: number) => gameWords[currentWordIndex];
export const selectCurrentWord = createSelector(selectGameWords, selectCurrentWordIndex, getCurrentWord);
