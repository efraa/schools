import React from 'react'
import AtlasRange from '@atlaskit/range'

export const Range = ({ label, wrapper, onChange, value, step, min, max }) => (
  <div className={`col-12 ${wrapper || ''}`}>
    <div className="form__field">
      {label ? <label>{label}</label> : ''}
      <AtlasRange
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <div className="d-flex justify-content-end">
        <strong>{value}</strong>
      </div>
    </div>
  </div>
)
