import { createGlobalStyle } from 'styled-components'
import { theme, Media } from '.'

export const GlobalStyle = createGlobalStyle`

  * {
    @import url('https://fonts.googleapis.com/css?family=Lato|Poppins:600,900&display=swap');

    margin: 0;
    padding: 0;
    color: ${theme.colors.defaultTextColor};
  }

  html,
  body {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    font-size: 16px;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    background: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h6 {
    font-family: ${theme.fonts.primary};
    font-weight: 900;
  }

  img {
    max-width: 100%;
    height: auto;
    width: 100%;
  }

  hr {
    border: none;
    height: 1px;
    margin: 16px 0;
  }

  button:disabled,
  button[disabled],
  .disabled {
    opacity: 0.7;
    user-select: none;
    pointer-events: none;
    cursor: not-allowed;
  }

  strong {
    font-weight: 600;
    font-family: ${theme.fonts.primary};
  }

  a,
  b {
    color: ${theme.colors.primary};
    transition: all 0.5s ease-in-out;
    font-family: ${theme.fonts.primary};
    font-weight: 600;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  .container {
    ${Media.desktopFull`
      max-width: 1200px;
    `}
  }

  .srv-validation-message {
    margin-top: 10px;
    color: ${theme.colors.danger};
    font-weight: bold;
    letter-spacing: 0.5px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
`
