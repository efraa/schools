import React, { memo } from 'react'
import { Link } from 'react-router-dom'

export const Bubble = memo(({ image, small, to }) => (
  <Link
    to={to}
    style={{
      backgroundImage: `url(${image})`,
    }}
    className={`bubble${small ? ' bubble--small' : ''}`}
  ></Link>
))
