import moment from 'moment';
import * as ACTIONS from "./app.actionTypes"

import {
  AppState,
  AppActions
} from './app.interfaces'

import {
  getMonthDetails,
} from '../_components/Datepicker/datepicker.utils'

const date = new Date()
const timestamp = moment().valueOf();

const initialState: AppState = {
  useDateRange: false,
  timestamp,
  year: date.getFullYear(),
  month: date.getMonth(),
  selectedDay: timestamp,
  monthDetails: getMonthDetails(date.getFullYear(), date.getMonth()),
}

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case ACTIONS?.SET_DATE_ATTRIBUTES:
      return {...state, ...action.payload}
    default: 
      return state;
  }
}