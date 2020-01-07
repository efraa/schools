import { Styled, Media, Animations } from '../../styles'

export const AuthPage = Styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: calc(100vh - 70px);
  padding: 40px 0;
  animation: ${Animations.Fade} 0.7s;
`

export const AuthImage = Styled.div`
  padding: 40px;

  ${Media.mobile`
    padding: 0 60px;
    text-align: center;

    img {
      max-width: 400px;
    }
  `}
`

export const AuthRow = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
