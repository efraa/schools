import React, { memo } from 'react'

export const Container = memo(({ children, rowClasses, fluid }) => (
  <div className={!fluid ? 'container' : 'wrapper-fluid'}>
    <div className={rowClasses ? `row ${rowClasses}` : 'row'}>{children}</div>
  </div>
))
