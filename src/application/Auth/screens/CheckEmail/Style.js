import { Styled, Theme, Media, Color } from '../../../../styles'
import { Link } from 'react-router-dom'

export const Text = Styled.p`
  font-size: 24px;
  color: ${Color(Theme.colors.defaultTextColor)
    .alpha(0.7)
    .string()};
  margin-bottom: 24px;
  max-width: 90%;

  ${Media.mobile`
    max-width: 100%;
    font-size: 18px;
    margin-bottom: 16px;
  `}
`

export const Small = Styled.p`
  small {
    color: ${Theme.colors.blueDark};
    font-size: 16px;
    ${Media.mobile`
      font-size: 14px;
    `}
  }
  margin: 32px 0;

  ${Media.mobile`
    margin-top: 24px;
  `}
`

export const Button = Styled(Link)`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`
