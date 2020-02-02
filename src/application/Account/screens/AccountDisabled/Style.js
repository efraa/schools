import { Styled, Theme, Color } from '../../../../styles'

export const Times = Styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 42px;
  display: block;
`
export const Account = Styled.div`
  display: flex;
  min-height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`

export const Title = Styled.h1`
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 24px;
`

export const Text = Styled.p`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 32px;
  color: ${Color(Theme.colors.defaultTextColor)
    .alpha(0.5)
    .string()};
  max-width: 424px;
`
