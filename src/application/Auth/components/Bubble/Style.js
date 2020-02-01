import { Styled, Theme, Color } from '../../../core/styles'
import { Link } from 'react-router-dom'

const bubbleColor = Color(Theme.colors.primary)
  .alpha(0.09)
  .string()
export const BubbleItem = Styled(Link)`
  display: block;
  background: ${Theme.colors.white};
  width: ${props => (props.small ? '140px' : '180px')};
  height: ${props => (props.small ? '140px' : '180px')};
  border-radius: 100%;
  background-image: ${props => props.image && `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  box-shadow: 6px 6px ${bubbleColor};
  border: solid 1px ${bubbleColor};
  position: relative;

  &:hover {
    transform: translateY(-16px);
    border-color: ${Theme.colors.primary};
  }
`
