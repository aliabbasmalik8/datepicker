import * as React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { appState } from '../../App/app.selectors'
import { setDateAttributes } from '../../App/app.actions';

import {
  CSSLibrary,
} from '../../src.interfaces'

import Checkbox from '../Checkbox/'

const DatepickerControls: React.FunctionComponent<DatepickerControlsProps> = () => {
  const dispatch = useDispatch();
  const state = useSelector(appState);

  const checkBoxHandler = (value: boolean) => {
    dispatch(setDateAttributes({useDateRange: value}))
  }

  return (
    <div style={styles.root}>
      <Checkbox
        label="Select Date Range"
        name="selectDateRange"
        value={!state?.useDateRange}
        checked={state.useDateRange}
        onChange={(value) => checkBoxHandler(value)}
      />
    </div>
  )
}

const styles: CSSLibrary = {
  root: {
  },
}

interface DatepickerControlsProps {
}

export default DatepickerControls
