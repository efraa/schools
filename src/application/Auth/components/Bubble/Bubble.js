import React, { memo } from 'react'
import { BubbleItem } from './Style'

export const Bubble = memo(({ image, small, to }) => (
  <BubbleItem
    to={to}
    image={image}
    small={small && small.toString()}
  ></BubbleItem>
))
