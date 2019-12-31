import React, { memo } from 'react'
import { SubtitleNode } from './Style'

export const Subtitle = memo(({ text, className }) => (
  <SubtitleNode className={className && className}>{text}</SubtitleNode>
))
