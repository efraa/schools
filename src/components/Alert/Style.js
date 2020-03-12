import { Styled, theme, animations, Color } from '../../styles'

export const AlertContainer = Styled.div`
  z-index: 10000;
  position: fixed;
  left: 30px;
  bottom: 30px;
  max-width: 350px;
`
export const AlertCard = Styled.div`
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
    props.success ? theme.colors.black : theme.colors.white};
  box-shadow: ${props =>
    `6px 6px ${
      props.success
        ? Color(theme.colors.black).alpha(0.3)
        : Color(theme.colors.danger).alpha(0.3)
    }`};
  display: flex;
  letter-spacing: 0.5px;
  border: solid 2px;
  border-color: ${props =>
    props.success ? 'transparent' : theme.colors.danger};
  font-weight: bold;
  color: ${props => (props.success ? theme.colors.white : theme.colors.danger)};
  animation: ${animations.Up} 0.7s;
`
