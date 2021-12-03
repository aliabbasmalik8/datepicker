import * as React from 'react'

import Label from '../Label/'

import {
  CSSLibrary,
} from '../../src.interfaces'

const Checkbox: GenericCheckboxComponent = ({
  name,
  label,
  value,
  checked = false,
  onChange,
}) => {
  const uniqId = `${name}-${value}`

  return (
    <div style={styles.root}>
      <input
        name={uniqId}
        id={uniqId}
        type="checkbox"
        checked={checked}
        onChange={() => {
          onChange && onChange(value)
        }}
      />
      <span style={styles.label}>
        {
          label &&
          <Label
            htmlFor={uniqId}
            text={label}
          />
        }
      </span>
    </div>
  )
}

const styles: CSSLibrary = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    paddingLeft: 5,
  },
}

export interface CheckboxProps<T> {
  name: string,
  label?: string,
  value: T,
  checked?: boolean,
  onChange?: (value: T) => void,
}

type GenericCheckboxComponent = <T extends string | number | boolean>(p: CheckboxProps<T>) => React.ReactElement<CheckboxProps<T>>

export default Checkbox
