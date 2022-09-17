import { createFeature, createReducer, on } from '@ngrx/store';
import { gotGameLetters, gotGameWords, remainingWordIndicesGenerated, gameEnded, gameComponentInitialized } from './game.actions';
import { beginGameButtonClicked, correctButtonClicked, playAgainButtonClicked, skipButtonClicked } from './game.ui.actions';
import { Letter } from '../word.models';
import { findNextRemainingIndex } from '../game.utils';

export interface GameState {
  gameStarted: boolean,
  gameEnded: boolean,
  gameLetters: Letter[],
  gameWords: string[],
  remainingWordIndices: number[],
  currentWordIndex: number | null,
  skipCount: number,
}

export const initialState: GameState = {
  gameStarted: false,
  gameEnded: false,
  gameLetters: [],
  gameWords: [],
  remainingWordIndices: [],
  currentWordIndex: null,
  skipCount: 0,
};

const startGame = (state: GameState): GameState => ({
  ...state,
  gameStarted: true,
  currentWordIndex: 0
});

const endGame = (state: GameState): GameState => ({
  ...state,
  gameEnded: true,
  currentWordIndex: null
});

const setRemainingWordIndices = (state: GameState, {remainingWordIndices}: {remainingWordIndices: number[]}) => ({
  ...state,
  remainingWordIndices
});

const setGameLetters = (state: GameState, {gameLetters}: {gameLetters: Letter[]}) => ({
  ...state,
  gameLetters
});

const setGameWords = (state: GameState, {gameWords}: {gameWords: string[]}) => ({
  ...state,
  gameWords
});

const setWordCorrect = (state: GameState) => ({
  ...state,
  currentWordIndex: findNextRemainingIndex(state.remainingWordIndices, state.currentWordIndex),
  remainingWordIndices: state.remainingWordIndices.filter( (i: number) => i !== state.currentWordIndex ),
});

const skipWord = (state: GameState) => ({
  ...state,
  currentWordIndex: findNextRemainingIndex(state.remainingWordIndices, state.currentWordIndex),
});

const incrementSkipCounter = (state: GameState) => ({
  ...state,
  skipCount: state.skipCount + 1
});

const resetGame = (state: GameState) => ({
  ...state,
  ...initialState
});

const gameStateReducer = createReducer(
  initialState,
  on(gameComponentInitialized, resetGame),
  on(playAgainButtonClicked, resetGame),
  on(beginGameButtonClicked, startGame),
  on(gameEnded, endGame),
  on(remainingWordIndicesGenerated, setRemainingWordIndices),
  on(gotGameLetters, setGameLetters),
  on(gotGameWords, setGameWords),
  on(correctButtonClicked, setWordCorrect),
  on(skipButtonClicked, incrementSkipCounter),
  on(skipButtonClicked, skipWord),
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
  selectCurrentWordIndex,
  selectRemainingWordIndices
} = gameFeature;
