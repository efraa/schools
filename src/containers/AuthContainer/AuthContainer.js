import React, { memo } from 'react'
import { Container, Col } from 'reactstrap'
// Styles
import { AuthPage, AuthImage, AuthRow } from './Style'

export const AuthContainer = memo(({ img, children }) => (
  <AuthPage>
    <Container>
      <AuthRow>
        <AuthImage
          xs={12}
          lg={{
            size: 6,
            order: 2,
          }}
        >
          <img src={img} alt="" />
        </AuthImage>
        <Col xs={12} lg={6}>
          {children}
        </Col>
      </AuthRow>
    </Container>
  </AuthPage>
))
