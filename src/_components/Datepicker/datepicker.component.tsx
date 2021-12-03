import * as React from 'react'

import {
  CSSLibrary,
} from '../../src.interfaces'

const Datepicker: React.FunctionComponent<DatepickerProps> = (props) => {

  return (
    <div style={styles.root}>
    </div>
  )
}

const styles: CSSLibrary = {
  root: {
    border: '1px solid black',
    borderRadius: 2,
    display: 'inline-block',
    minHeight: 250,
    minWidth: 250,
    height: '100%',
    width: '100%',
  },
}

interface DatepickerProps {}

export default Datepicker
