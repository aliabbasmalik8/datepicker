import React from 'react';

import { monthMap } from '../Datepicker/datepicker.utils';

import { MonthPickerState } from './monthpicker.interfaces'

import './styles.css';

function MonthPicker({
  state,
  setMonth
}: MonthPickerState){
  
  return (
    <div className='month-picker'>
      {monthMap?.map((month, index) => (
        <div key={index} className={`month-name ${state.month === index && 'active-month'}`} onClick={() => setMonth(index)}>
          {month}
        </div>
      ))}
    </div>
  )
}

export default MonthPicker;
