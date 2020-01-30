import { Styled, Theme, Color, Animations } from '../../../core/styles'

export const LogoutView = Styled.div`
  display: flex;
  min-height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  background: ${Theme.colors.blueLight};
  animation: ${Animations.Fade} 0.7s;
`

export const Form = Styled.form`
  margin: auto;
`

export const LogoutContainer = Styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${Theme.colors.white};
  border-radius: 4px;
  padding: 45px 40px;
  box-shadow: 8px 8px
    ${Color(Theme.colors.primary)
      .alpha(0.18)
      .string()};
  border: solid 1px
    ${Color(Theme.colors.primary)
      .alpha(0.18)
      .string()};
`

export const Content = Styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = Styled.h1`
  font-size: 35px;
  margin-bottom: 32px;
`

export const Text = Styled.p`
  font-size: 24px;
  max-width: 65%;
`

export const Buttons = Styled.div`
  display: flex;
  margin-top: 24px;
`
