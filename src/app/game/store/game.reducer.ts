import { createFeature, createReducer, on } from '@ngrx/store';
import { gotGameLetters, gotGameWords, remainingWordIndicesGenerated, gameComponentInitialized, initializeRemainingTime, gameTimerTick, gameEndedByTime, gameEndedByCompletion, showGameResults } from './game.actions';
import { beginGameButtonClicked, correctButtonClicked, penalizeButtonClicked, playAgainButtonClicked, skipButtonClicked } from './game.ui.actions';
import { Letter } from '../word.models';
import { findNextRemainingIndex } from '../game.utils';

export interface GameState {
  gameStarted: boolean,
  gameEnded: boolean,
  showGameResults: boolean,
  gameLetters: Letter[],
  gameWords: string[],
  remainingWordIndices: number[],
  invalidWordIndices: number[],
  currentWordIndex: number | null,
  skipCount: number,
  remainingTime: number,
}

export const initialState: GameState = {
  gameStarted: false,
  gameEnded: false,
  showGameResults: false,
  gameLetters: [],
  gameWords: [],
  remainingWordIndices: [],
  invalidWordIndices: [],
  currentWordIndex: null,
  skipCount: 0,
  remainingTime: 0,
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

const setRemainingTime = (state: GameState, {remainingTime}: {remainingTime: number}) => ({
  ...state,
  remainingTime
});

const decrementRemainingTime = (state: GameState) => ({
  ...state,
  remainingTime: state.remainingTime - 1
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

const setWordInvalid = (state: GameState) => ({
  ...state,
  currentWordIndex: findNextRemainingIndex(state.remainingWordIndices, state.currentWordIndex),
  invalidWordIndices: state.currentWordIndex !== null ? [...state.invalidWordIndices, state.currentWordIndex] : state.invalidWordIndices,
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

const setShowGameResults = (state: GameState) => ({
  ...state,
  showGameResults: true
});

const resetGame = (state: GameState) => ({
  ...state,
  ...initialState
});

const gameStateReducer = createReducer(
  initialState,
  on(gameComponentInitialized, resetGame),
  on(playAgainButtonClicked, resetGame),
  on(initializeRemainingTime, setRemainingTime),
  on(gameTimerTick, decrementRemainingTime),
  on(beginGameButtonClicked, startGame),
  on(gameEndedByCompletion, endGame),
  on(gameEndedByTime, endGame),
  on(remainingWordIndicesGenerated, setRemainingWordIndices),
  on(gotGameLetters, setGameLetters),
  on(gotGameWords, setGameWords),
  on(correctButtonClicked, setWordCorrect),
  on(penalizeButtonClicked, setWordInvalid),
  on(skipButtonClicked, incrementSkipCounter),
  on(skipButtonClicked, skipWord),
  on(showGameResults, setShowGameResults)
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
  selectShowGameResults,
  selectRemainingTime,
  selectSkipCount,
  selectGameLetters,
  selectGameWords,
  selectCurrentWordIndex,
  selectRemainingWordIndices,
  selectInvalidWordIndices,
} = gameFeature;
