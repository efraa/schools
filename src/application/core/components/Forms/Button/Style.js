import { Styled, Theme, Color, Media } from '../../../../../styles'

export const ButtonNode = Styled.button`
  min-height: 45px;
  padding: 16px 24px;
  text-align: center;
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.white};
  border: none;
  outline: none;
  font-size: 16px;
  margin: 0;
  font-family: ${Theme.fonts.primary};
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 100px;
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  ${props =>
    props.disabled &&
    `
    opacity: 0.7;
    user-select: none;
    pointer-events: none;
    cursor: not-allowed;
  `}

  &:hover {
    background-color: ${Color(Theme.colors.primary)
      .darken(0.1)
      .string()};
    color: ${Theme.colors.white};
  }

  &:focus,
  &:focus:active {
    background-color: ${Color(Theme.colors.primary)
      .darken(0.1)
      .string()};
    box-shadow: 0 0 0 4px
      ${Color(Theme.colors.primary)
        .alpha(0.3)
        .string()};
    color: ${Theme.colors.white};
  }

  ${props =>
    props.outline &&
    `
    background: ${Theme.colors.white};
    color: ${Theme.colors.primary};

    &:hover {
      background: ${Color(Theme.colors.primary)
        .alpha(0.1)
        .string()};
      color: ${Theme.colors.primary};
    }

    &:focus {
      background: ${Theme.colors.white};
      color: ${Theme.colors.primary};
      box-shadow: 0 0 0 4px ${Color(Theme.colors.primary)
        .alpha(0.3)
        .string()};
    }
  `}

  ${props =>
    props.secound &&
    `
    background-color: ${Color(Theme.colors.primary)
      .alpha(0.15)
      .string()};
    color: ${Theme.colors.primary};

    &:hover {
      background-color: ${Theme.colors.primary};
      color: ${Theme.colors.white};
    }

    &:focus,
    &:focus:active {
      background-color: ${Theme.colors.primary};
      color: ${Theme.colors.white};
      box-shadow: 0 0 0 4px ${Color(Theme.colors.primary)
        .alpha(0.3)
        .string()};
    }
  `}

  ${Media.mobile`
    min-height: 35px;
    padding: 14px 20px;
    font-size: 14px;
  `}

  &:after {
    content            : '';
    display            : block;
    position           : absolute;
    width              : 100%;
    height             : 100%;
    top                : 0;
    left               : 0;
    pointer-events     : none;
    background-image   : radial-gradient(circle, white 10%, transparent 0.01%);
    background-repeat  : no-repeat;
    background-position: 50%;
    transform          : scale(10, 10);
    opacity            : 0;
    transition         : transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform : scale(0, 0);
    opacity   : 0.3;
    transition: 0s;
  }
`
