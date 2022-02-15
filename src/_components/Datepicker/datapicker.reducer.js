import moment from 'moment';

import {
  getMonthDetails,
} from '../Datepicker/datepicker.utils.js'

const date = new Date()
const timestamp = moment().valueOf();

const initialState = {
  timestamp,
  year: date.getFullYear(),
  month: date.getMonth(),
  selectedDay: timestamp,
  monthDetails: getMonthDetails(date.getFullYear(), date.getMonth())
}

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'set-date-values':
      return {...state, ...action.payload}
    default: 
      return state;
  }
}