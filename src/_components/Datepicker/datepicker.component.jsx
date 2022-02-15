import React, { useState } from 'react'
import moment from 'moment';

import MonthPicker from '../Monthpicker/monthpicker.component.jsx';
import DayPicker from '../Daypicker/daypicker.component.jsx';

import {
  getMonthDetails,
} from './datepicker.utils.js'

const date = new Date()
const timestamp = moment().valueOf();

function DatePicker(){
  const [picker, setPicker] = useState('monthPicker');
  const [state, setState] = useState({
    timestamp,
    year: date.getFullYear(),
    month: date.getMonth(),
    selectedDay: timestamp,
    monthDetails: getMonthDetails(date.getFullYear(), date.getMonth())
  });

  const setMonth = (month) => {
    setState({...state, month, monthDetails: getMonthDetails(state?.year, month)});
    setPicker('dayPicker');
  }

  const setDay = (day) => {
    setState({...state, selectedDay: day.timestamp })
  }

  const monthHandler = (increment) => {
    let year = state.year
    let month = state.month + increment
    if(month === -1) {
      month = 11
      year -= 1;
    } else if(month === 12) {
      month = 0
      year += 1;
    }
    setState({...state, year, month, monthDetails: getMonthDetails(state?.year, month)});
  }

  return (
    <div className='date-picker-container'>
      {picker === 'monthPicker' && <MonthPicker {...{ state, setMonth }} />}
      {picker === 'dayPicker' && <DayPicker {...{ state, setState, monthHandler, setDay}} />}
    </div>
  )
}

export default DatePicker;