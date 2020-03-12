import React, { memo } from 'react'
import { SpinnerWrapper, SpinnerNode } from './Style'

export const Spinner = memo(() => (
  <SpinnerWrapper>
    <SpinnerNode />
  </SpinnerWrapper>
))
