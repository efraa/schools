import React, { memo } from 'react'

export const Button = memo(({ props, type, onClick, text, classes }) => (
  <button
    {...props}
    type={type || 'button'}
    className={classes ? `button ${classes}` : 'button'}
    onClick={onClick}
  >
    {text}
  </button>
))
