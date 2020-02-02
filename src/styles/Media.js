import { Theme } from '.'

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
      size: Theme.breakpoints.lg,
      styles,
    }),

  desktop: styles =>
    up({
      size: Theme.breakpoints.lg,
      styles,
    }),

  desktopFull: styles =>
    up({
      size: Theme.breakpoints.xl,
      styles,
    }),
}
