import * as React from 'react'

import {
  CSSLibrary,
} from '../../src.interfaces'

import Checkbox from '../Checkbox/'

const DatepickerControls: React.FunctionComponent<DatepickerControlsProps> = ({
  selectDateRange,
}) => {

  return (
    <div style={styles.root}>
      <Checkbox
        label="Select Date Range"
        name="selectDateRange"
        value={!selectDateRange}
        checked={selectDateRange}
      />
    </div>
  )
}

const styles: CSSLibrary = {
  root: {
  },
}

interface DatepickerControlsProps {
  selectDateRange: boolean,
}

export default DatepickerControls
