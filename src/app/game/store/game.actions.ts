import { createAction, props } from '@ngrx/store';
import { Letter } from '../word.models';

export const gameComponentInitialized = createAction(
  '[Game Component] Component Initialized'
);

export const remainingWordIndicesGenerated = createAction(
  '[Game Component] Generated Remaining Word Indices',
  props<{remainingWordIndices: number[]}>()
);

export const initializeRemainingTime = createAction(
  '[Game Component] Initialized Remaining Time',
  props<{remainingTime: number}>()
);

export const gotGameLetters = createAction(
  '[Game Component] Got Game Letters',
  props<{gameLetters: Letter[]}>()
);

export const gotGameWords = createAction(
  '[Game Component] Got Game Words',
  props<{gameWords: string[]}>()
);

export const gameTimerTick = createAction(
  '[Game Component] Game Timer Ticked'
);

export const gameEndedByTime = createAction(
  '[Game Component] Game Ended By Time'
);

export const gameEndedByCompletion = createAction(
  '[Game Component] Game Ended By Completion'
);
