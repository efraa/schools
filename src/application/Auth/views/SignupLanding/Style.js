import SchoolsImg from '../../../../contexts/images/schools.svg'
import { Styled, Theme, Color, Media, Animations } from '../../../core/styles'

export const Signup = Styled.div`
  min-height: calc(100vh - 70px);
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animations.Fade} 0.7s;

  ${Media.mobile`
    padding: 40px 0;
  `}
`

export const SignupHead = Styled.div`
  max-width: 600px;
  z-index: 1;
  position: relative;
`
export const SignupCardTitle = Styled.p`
  color: ${Theme.colors.primary};
  font-weight: 400;
  font-size: 18px;
  font-family: ${Theme.fonts.primary};
  margin-bottom: 16px;
`

export const SignupCardText = Styled.p`
  max-width: 85%;
  margin-bottom: 16px;
`

export const SignupCard = Styled.div`
  background: ${Theme.colors.white};
  border: solid 1px
    ${Color(Theme.colors.primary)
      .alpha(0.2)
      .string()};
  box-shadow: 6px 6px
    ${Color(Theme.colors.primary)
      .alpha(0.2)
      .string()};
  padding: 24px 16px;
  width: 100%;
  max-width: 290px;
  margin-top: 32px;
  border-radius: 4px;
`

export const SignupText = Styled.p`
  max-width: 450px;
  font-size: 18px;
  line-height: 25px;
  color: ${Color(Theme.colors.defaultTextColor)
    .alpha(0.6)
    .string()};

  span {
    font-weight: bold;
  }

  ${Media.mobile`
    font-size: 16px;
    line-height: 18px;
  `}
`

export const SignupSubTitle = Styled.h4`
  font-weight: 400;
  font-size: 24px;
  color: ${Color(Theme.colors.defaultTextColor)
    .alpha(0.7)
    .string()};
  margin-bottom: 24px;
  max-width: 90%;

  ${Media.mobile`
    font-size: 20px;
    margin-bottom: 20px;
  `}
`

export const BubbleSchool = Styled.div`
  margin-top: -70px;
  position: absolute;

  ${Media.desktop`
    margin-left: 20%;
  `}

  ${Media.desktopFull`
    margin-left: 28%;
  `}
`

export const BubbleTeacher = Styled.div`
  margin-top: 90px;
  position: absolute;

  ${Media.desktop`
    margin-left: -24px;
  `}

  ${Media.desktopFull`
    margin-left: 8%;
  `}
`

export const BubbleStudent = Styled.div`
  margin-top: 150px;
  position: absolute;
  right: 0;
`

export const BubbleContainer = Styled.div`
  min-height: 500px;
  width: 65%;
  background-image: url(${SchoolsImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  justify-content: center;
  position: relative;

  ${Media.mobile`
    width: 100%;
    background-position: center;
  `}
`

export const BubbleWrapper = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -350px;

  ${Media.mobile`
    margin-top: 60px;
    justify-content: center;
  `}
`
