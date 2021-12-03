import {
  Action,
  Reducer,
} from 'redux'

import {
  AppState,
} from './app.interfaces'

const initialState: AppState = {
  useDateRange: false,
}

export const appReducer: Reducer = (state = initialState, action: Action) => {
  return state
}