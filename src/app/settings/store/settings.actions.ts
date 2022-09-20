import { createAction, props } from '@ngrx/store';

export const numWordsInputChanged = createAction(
  '[Settings Component] (Number of Words Input) Changed',
  props<{numWords: number}>()
);

export const gameLengthChanged = createAction(
  '[Settings Component] (Game Length Select Option) Changed',
  props<{timerLength: number}>()
);
