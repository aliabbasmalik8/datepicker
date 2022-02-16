import {
  AppState,
} from './app.interfaces'

export const selectUseDateRange = (state: AppState) => state.useDateRange;
export const appState = (state: AppState) => state;
