import { Styled, Media } from '../../styles'

export const SubtitleNode = Styled.h3`
  font-size: 40px;
  line-height: 43px;
  margin: 0;
  padding: 0;

  ${Media.mobile`
    font-size: 26px;
    line-height: 29px;
  `}
`
