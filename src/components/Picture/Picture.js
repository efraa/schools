import React, { memo } from 'react'
import { PictureItem } from './Style'

export const Picture = memo(({ image, border, width }) => (
  <PictureItem
    image={image}
    width={width || '65px'}
    border={border && border.toString()}
  ></PictureItem>
))
