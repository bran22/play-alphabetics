import { createFeature, createReducer, on } from '@ngrx/store';


export interface SettingsState {
  numWords: number,
  timerLength: number
}

export const initialState: SettingsState = {
  numWords: 10,
  timerLength: 60
};

const settingsStateReducer = createReducer(
  initialState,
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
