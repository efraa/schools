import React, { memo } from 'react'
import { TitleNode } from './Style'

export const Title = memo(({ text, className }) => (
  <TitleNode className={className && className}>{text}</TitleNode>
))
