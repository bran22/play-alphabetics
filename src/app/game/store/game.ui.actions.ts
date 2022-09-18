import { createAction } from '@ngrx/store';

export const beginGameButtonClicked = createAction(
  '[Game Component] (Begin Game Button) Button Clicked'
);

export const correctButtonClicked = createAction(
  '[Game Component] (Correct Button) Clicked'
);

export const skipButtonClicked = createAction(
  '[Game Component] (Skip Button) Clicked'
);

export const penalizeButtonClicked = createAction(
  '[Game Component] (Penalize Button) Clicked'
);

export const playAgainButtonClicked = createAction(
  '[Game Component] (Play Again Button) Clicked'
);
