import { Styled, Theme, Animations, Color, Media } from '../../styles'

export const ForgotPassStyle = {
  Wrapper: Styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    animation: ${Animations.Fade} 0.7s;
  `,

  ForgotPassNode: Styled.div`
    background: $white;
    box-shadow: 8px 8px
      ${Color(Theme.colors.primary)
        .alpha(0.1)
        .string()};
    border: solid 1px
      ${Color(Theme.colors.primary)
        .alpha(0.1)
        .string()};
    padding: 44px;
    min-height: 440px;
    border-radius: 4px;

    ${Media.mobile`
      min-height: auto;
      padding: 32px;
    `}
  `,

  Title: Styled.h1`
    font-size: 45px;
    line-height: 50px;
    max-width: 80%;
    margin-bottom: 32px;

    ${Media.mobile`
      max-width: 100%;
      font-size: 28px;
      line-height: 30px;
      margin-bottom: 24px;
    `}
  `,
}
