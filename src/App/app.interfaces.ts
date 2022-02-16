import * as ACTIONS from "./app.actionTypes"

export interface AppState {
  useDateRange: boolean,
  timestamp: number,
  year: number,
  month: number,
  selectedDay: number,
  monthDetails: any,
}

export interface ISetDatePayload {
  useDateRange?: boolean,
  timestamp?: number,
  year?: number,
  month?: number,
  selectedDay?: number,
  monthDetails?: any,
}

export interface ISetDate {
  type: typeof ACTIONS.SET_DATE_ATTRIBUTES,
  payload: ISetDatePayload
}

export type AppActions = ISetDate