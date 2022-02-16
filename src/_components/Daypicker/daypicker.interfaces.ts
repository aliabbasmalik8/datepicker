import { AppState } from '../../App/app.interfaces'
 
export interface DayPickerState {
  state: AppState,
  monthHandler: (offset: number) => void,
  setDay: (day: number) => void,
}