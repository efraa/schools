import React from 'react'
import { FormField, Control } from './Style'

export const Field = ({
  placeholder,
  label,
  type,
  wrapper,
  onChange,
  onClick,
  value,
  name,
  children,
}) => {
  const props = {
    placeholder,
    type,
    onChange,
    onClick,
    value,
    name,
  }
  return (
    <div className={`col-12 ${wrapper || ''}`}>
      <FormField>
        {label ? <label>{label}</label> : ''}
        <Control {...props} />
        {children}
      </FormField>
    </div>
  )
}
