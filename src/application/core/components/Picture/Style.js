import { Styled, Theme } from '../../../../styles'

export const PictureItem = Styled.div`
  ${props => `
    width: ${props.width};
    height: ${props.width};
    min-width: ${props.width};
    min-height: ${props.width};
  `};
  background-color: ${Theme.colors.grayLight};
  border-radius: 100%;
  margin: 0 auto;
`
