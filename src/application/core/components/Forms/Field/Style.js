import { Styled, Theme, Media, Color } from '../../../styles'

export const FormField = Styled.div`
  margin: 8px 0;
`
export const Control = Styled.input`
  background: ${Theme.colors.blueLight} !important;
  min-height: 55px !important;
  width: 100% !important;
  border: solid 1px transparent !important;
  padding: 16px !important;
  border-radius: 6px !important;
  outline: none !important;
  transition: all 0.3s ease !important;
  color: ${Theme.colors.defaultTextColor} !important;
  font-weight: bold !important;
  font-size: 14px !important;

  &::placeholder {
    color: ${Color(Theme.colors.defaultTextColor)
      .alpha(0.5)
      .string()} !important;
  }

  &:hover {
    border-color: ${Theme.colors.primary} !important;
  }

  &:focus {
    background: ${Theme.colors.white} !important;
    border-color: ${Theme.colors.primary} !important;
    box-shadow: 0 0 0 3px
      ${Color(Theme.colors.primary)
        .alpha(0.3)
        .string()} !important;
  }

  ${Media.mobile`
    min-height: 35px !important;
    padding: 16px !important;
  `}
`
