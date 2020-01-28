import { Styled, Theme, Color } from '../../../../../styles'

export const Sidebar = Styled.div`
  background: ${Theme.colors.white};
  border: solid 1px ${Color(Theme.colors.primary)
    .alpha(0.2)
    .string()};
  padding: 24px;
  width: 250px;
  box-shadow: 6px 6px ${Color(Theme.colors.primary)
    .alpha(0.2)
    .string()};
  border-radius: 4px;
  margin: 16px;
  position: sticky;
`
