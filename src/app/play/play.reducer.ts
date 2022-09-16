import { createFeature, createReducer, on } from '@ngrx/store';
import { beginGameButtonClicked } from './play.actions';

export interface GameState {
  gameStarted: boolean
}

export const initialState: GameState = {
  gameStarted: false
};

const startGame = (state: GameState): GameState => ({
  ...state,
  gameStarted: true
});

const gameStateReducer = createReducer(
  initialState,
  on(beginGameButtonClicked, startGame)
);

export const gameFeature = createFeature({
  name: 'game',
  reducer: gameStateReducer,
});

export const {
  name,
  reducer,
  selectGameState,
  selectGameStarted
} = gameFeature;
