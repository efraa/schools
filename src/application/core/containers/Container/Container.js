import React, { memo } from 'react'

export const Container = memo(({ children, rowClasses, fluid, node }) => (
  <div className={!fluid ? 'container' : 'wrapper-fluid'}>
    {node ? (
      children
    ) : (
      <div className={rowClasses ? `row ${rowClasses}` : 'row'}>{children}</div>
    )}
  </div>
))
