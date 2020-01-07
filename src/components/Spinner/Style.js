import { Theme, Color } from '../../styles'
import styled, { keyframes } from 'styled-components'

export const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 1;
  background: ${Color(Theme.colors.white)
    .alpha(0.5)
    .string()};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SpinnerNode = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &::after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${Theme.colors.white};
    border-color: ${Theme.colors.primary} transparent ${Theme.colors.secound}
      transparent;
    animation: ${loading} 1.2s linear infinite;
  }
`
