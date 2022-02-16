import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

import MonthPicker from '../Monthpicker/monthpicker.component';
import DayPicker from '../Daypicker/daypicker.component';

import {
  getMonthDetails,
} from './datepicker.utils'

import { appState } from '../../App/app.selectors'
import { setDateAttributes } from '../../App/app.actions';

function DatePicker(){
  const dispatch = useDispatch();
  const state = useSelector(appState);
  
  const [picker, setPicker] = useState('monthPicker');

  const setMonth = (month: number) => {
    const payload = {month, monthDetails: getMonthDetails(state?.year, month)}
    dispatch(setDateAttributes({...payload}));
    setPicker('dayPicker');
  }

  const setDay = (day: any) => {
    const payload = {selectedDay: day.timestamp};
    dispatch(setDateAttributes({...payload}));
  }

  const monthHandler = (increment: number) => {
    let year = state.year
    let month = state.month + increment
    if(month === -1) {
      month = 11
      year -= 1;
    } else if(month === 12) {
      month = 0
      year += 1;
    }
    const payload = {year, month, monthDetails: getMonthDetails(state?.year, month)};
    dispatch(setDateAttributes({...payload}));
  }

  console.log('====>>>', state);
  return (
    <div className='date-picker-container'>
      {picker === 'monthPicker' && <MonthPicker {...{ state, setMonth }} />}
      {picker === 'dayPicker' && <DayPicker {...{ state, monthHandler, setDay}} />}
    </div>
  )
}

export default DatePicker;