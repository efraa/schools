import { keyframes } from 'styled-components'

const Up = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const animations = {
  Up,
  Fade,
}
