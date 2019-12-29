import React, { memo } from 'react'
import { Container } from '../Container'

export const ForgotPassContainer = memo(({ children, title }) => (
  <div className="forgot-pass__wrapper fade">
    <Container rowClasses="d-flex justify-content-center">
      <div className="col-12 col-md-8">
        <div className="forgot-pass">
          <h1 className="forgot-pass__title">{title}</h1>
          {children}
        </div>
      </div>
    </Container>
  </div>
))
