import { createFeature, createReducer, on } from '@ngrx/store';
import { gameLengthChanged, numWordsInputChanged } from './settings.actions';


export interface SettingsState {
  numWords: number,
  timerLength: number
}

export const initialState: SettingsState = {
  numWords: 10,
  timerLength: 60
};

const setNumWords = (state: SettingsState, {numWords}: {numWords: number}) => ({
  ...state,
  numWords
});

const setTimerLength = (state: SettingsState, {timerLength}: {timerLength: number}) => ({
  ...state,
  timerLength
});

const settingsStateReducer = createReducer(
  initialState,
  on(numWordsInputChanged, setNumWords),
  on(gameLengthChanged, setTimerLength)
);

export const settingsFeature = createFeature({
  name: 'settings',
  reducer: settingsStateReducer,
});

export const {
  name,
  reducer,
  selectSettingsState,
  selectNumWords,
  selectTimerLength
} = settingsFeature;
