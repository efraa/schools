import React, { memo } from 'react'
import { Container } from '../Container'
// Styles
import { AuthPage, AuthImage, AuthRow } from './Style'

export const AuthContainer = memo(({ img, children }) => (
  <AuthPage>
    <Container node="true">
      <AuthRow className="row">
        <AuthImage className="col-12 col-lg-6 order-lg-2">
          <img src={img} alt="" />
        </AuthImage>
        <div className="col-12 col-lg-6">{children}</div>
      </AuthRow>
    </Container>
  </AuthPage>
))
