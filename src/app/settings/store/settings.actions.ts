import { createAction, props } from '@ngrx/store';

export const numWordsInputChanged = createAction(
  '[Settings Component] (Number of Words Input) Changed',
  props<{numWords: number}>()
);

export const gameLengthInputChanged = createAction(
  '[Settings Component] (Game Length Input) Changed',
  props<{timerLength: number}>()
);
