import { AppState } from '../../App/app.interfaces'

export interface MonthPickerState {
  state: AppState,
  setMonth: (month: number) => void
}