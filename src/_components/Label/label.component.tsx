import * as React from 'react'

const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
}) => (
  <label
    htmlFor={htmlFor}
  >
    {text}
  </label>
)

export interface LabelProps {
  htmlFor?: string,
  text: string,
}

export default Label