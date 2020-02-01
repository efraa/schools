import React, { memo } from 'react'
// Styles
import { Common } from '../../../core/styles'
import { Container } from '../../../core/containers/Container'
const { Wrapper, ForgotPassNode, Title } = Common.ForgotPassStyle

export const ForgotPassContainer = memo(({ children, title }) => (
  <Wrapper>
    <Container rowClasses="d-flex justify-content-center">
      <div className="col-12 col-md-8">
        <ForgotPassNode>
          <Title>{title}</Title>
          {children}
        </ForgotPassNode>
      </div>
    </Container>
  </Wrapper>
))
