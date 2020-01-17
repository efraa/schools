import { Styled, Theme, Media } from '../../styles'

export const User = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const Picture = Styled.div`
  background-position: center;
  ${props => props.image && `background-image: url(${props.image});`}
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${Theme.colors.grayLight};
  border-radius: 100%;
  border: solid 4px ${Theme.colors.white};
  box-shadow: 0 0 0 4px ${Theme.colors.primary};
  margin-right: 16px;

  ${Media.mobile`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    box-shadow: 0 0 0 3px ${Theme.colors.primary};
    border-width: 2px;
  `}
`

export const Name = Styled.h4`
  padding: 0;
  margin: 0;
  font-size: 18px;

  ${Media.mobile`
    font-size: 16px;
    margin-bottom: 6px;
  `}
`

export const UserName = Styled.p`
  color: ${Theme.colors.primary};
  font-weight: 400;
  font-size: 14px;
  font-family: ${Theme.fonts.primary};
  padding: 0;
  margin: 0;

  ${Media.mobile`
    font-size: 12px;
  `}
`

export const Text = Styled.p`
  padding: 0;
  margin-bottom: 6px;
  font-weight: bold;
`
