import { createFeature, createReducer, on } from '@ngrx/store';
import { beginGameButtonClicked, gameComponentInitialized, gameEnded, gotGameLetters, gotGameWords } from './game.actions';
import { Letter } from '../words';

export interface GameState {
  gameStarted: boolean,
  gameEnded: boolean,
  gameLetters: Letter[],
  gameWords: string[],
  completedWordIndices: number[],
  currentWordIndex: number,
}

export const initialState: GameState = {
  gameStarted: false,
  gameEnded: false,
  gameLetters: [],
  gameWords: [],
  completedWordIndices: [],
  currentWordIndex: 0,
};

const startGame = (state: GameState): GameState => ({
  ...state,
  gameStarted: true
});

const endGame = (state: GameState): GameState => ({
  ...state,
  gameEnded: true
});

const setGameLetters = (state: GameState, {gameLetters}: {gameLetters: Letter[]}) => ({
  ...state,
  gameLetters
});

const setGameWords = (state: GameState, {gameWords}: {gameWords: string[]}) => ({
  ...state,
  gameWords
});

const advanceCurrentWord = (state: GameState) => ({
  ...state,
});

const gameStateReducer = createReducer(
  initialState,
  on(beginGameButtonClicked, startGame),
  on(gameEnded, endGame),
  on(gotGameLetters, setGameLetters),
  on(gotGameWords, setGameWords)
);

export const gameFeature = createFeature({
  name: 'game',
  reducer: gameStateReducer,
});

export const {
  name,
  reducer,
  selectGameState,
  selectGameStarted,
  selectGameEnded,
  selectGameLetters,
  selectGameWords,
  selectCurrentWordIndex
} = gameFeature;
