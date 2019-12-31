import styled from 'styled-components'
import { Media, Theme } from '../../styles'

export const TitleNode = styled.h1`
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 16px !important;

  ${Media.up({
    size: Theme.breakpoints.md,
    styles: `font-size: 45px;
      line-height: 50px;
      margin-bottom: 16px !important;`,
  })}

  ${Media.desktop`
    font-size: 60px;
    line-height: 65px;
    margin-bottom: 32px !important;
  `}
`
