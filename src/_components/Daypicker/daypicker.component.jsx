import React from 'react'
import moment from 'moment';

import { monthMap } from '../Datepicker/datepicker.utils';

import './styles.css';

function DayPicker({
  state,
  monthHandler,
  setDay,
}){
  const getMonth = month => monthMap[Math.max(Math.min(11, month), 0)] || 'Month'
  const isCurrentDay = day =>  moment().isSame(day.timestamp, 'day');
  const isSelectedDay = day =>  moment(day.timestamp).isSame(state.selectedDay, 'day');
  
  const daysMarkup = (
    state.monthDetails.map((day, index) => (
      <div className={'day-container ' + (day.month !== 0 ? ' disabled' : '') + 
          (isCurrentDay(day) ? ' highlight' : '') + (isSelectedDay(day) ? ' highlight-green' : '')} key={index}>
          <div className='day-picker-day'>
            <span onClick={() => setDay(day)}>
              {day.date}
            </span>
          </div>
      </div>
    ))
  )
  return (
    <div className='day-picker-banner'>
      <div className='month-handler'>
        <div onClick={() => monthHandler(-1)} className='month-handler-arrow'>{'<'}</div>
        <div>{getMonth(state.month)}</div>
        <div onClick={() => monthHandler(1)} className='month-handler-arrow'>{'>'}</div>
      </div>
      <div className='day-picker'>
        <div className='day-picker-head'>
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day,index)=>(
            <div key={index} className='day-name'>{day}</div>
          ))}
        </div>
        <div className='day-picker-body'>
          {daysMarkup}
        </div>
      </div>
    </div>
  )
}

export default DayPicker;
