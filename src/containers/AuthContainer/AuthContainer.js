import React, { memo } from 'react'
import { Container } from '../Container'

export const AuthContainer = memo(({ img, children }) => (
  <div className="auth__page fade">
    <Container rowClasses="auth__row">
      <div className="col-12 col-lg-6 order-lg-2 auth__image">
        <img src={img} alt="" />
      </div>
      <div className="col-12 col-lg-6">{children}</div>
    </Container>
  </div>
))
