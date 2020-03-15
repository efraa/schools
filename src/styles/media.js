import { theme } from '.'

const up = ({ size, styles }) =>
  `@media only screen and (min-width: ${size}) {
    ${styles}
  }`

const down = ({ size, styles }) =>
  `@media only screen and (max-width: ${size}) {
    ${styles}
  }`

export const Media = {
  up,
  down,
  mobile: styles =>
    down({
      size: theme.breakpoints.lg,
      styles,
    }),

  desktop: styles =>
    up({
      size: theme.breakpoints.lg,
      styles,
    }),

  desktopFull: styles =>
    up({
      size: theme.breakpoints.xl,
      styles,
    }),
}
