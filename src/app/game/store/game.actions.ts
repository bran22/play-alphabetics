import { createAction, props } from '@ngrx/store';
import { Letter } from '../words';

export const gameComponentInitialized = createAction(
  '[Game Component] Component Initialized'
);

export const beginGameButtonClicked = createAction(
  '[Game Component] (Begin Game Button) Button Clicked'
);

export const gotGameLetters = createAction(
  '[Game Component] Got Game Letters',
  props<{gameLetters: Letter[]}>()
);

export const gotGameWords = createAction(
  '[Game Component] Got Game Words',
  props<{gameWords: string[]}>()
);

export const gameEnded = createAction(
  '[Game Component] Game Ended'
);
