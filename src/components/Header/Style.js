import { Styled, theme, Color } from '../../styles'
import { Link, NavLink } from 'react-router-dom'

export const HeaderNode = Styled.header`
  border-bottom: solid 1px
    ${Color(theme.colors.black)
      .alpha(0.07)
      .string()};
  min-height: 65px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${theme.colors.white};
  z-index: 1;

  .row {
    height: 100%;
  }
`

export const HeaderWrapper = Styled.div`
  min-height: 65px;
  position: relative;
  width: 100%;
`

export const HeaderBrand = Styled(Link)`
  width: 108px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`

export const HeaderContent = Styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
`

export const HeaderButton = Styled(NavLink)`
  min-height: 35px;
  padding: 14px 18px;
  font-size: 14px;
`
