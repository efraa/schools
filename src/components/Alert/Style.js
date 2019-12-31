import styled from 'styled-components'
import color from 'color'
import { Theme, Animations } from '../../styles'

export const AlertContainer = styled.div`
  z-index: 10000;
  position: fixed;
  left: 30px;
  bottom: 30px;
  max-width: 350px;
`
export const AlertCard = styled.div`
  margin: 20px 0;
  position: relative;
  font-size: 16px;
  text-align: center;
  display: none;
  padding: 24px;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
  transition: all 0.3s ease;
  background-color: ${props =>
    props.success ? Theme.colors.black : Theme.colors.white};
  box-shadow: ${props =>
    props.success
      ? `6px 6px ${color(Theme.colors.black).alpha(0.3)}`
      : `6px 6px ${color(Theme.colors.danger).alpha(0.3)}`};
  display: flex;
  letter-spacing: 0.5px;
  border: solid 2px;
  border-color: ${props =>
    props.success ? 'transparent' : Theme.colors.danger};
  font-weight: bold;
  color: ${props => (props.success ? Theme.colors.white : Theme.colors.danger)};
  animation: ${Animations.Up} 0.7s;
`
