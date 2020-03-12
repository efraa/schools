import React, { memo } from 'react'
// Styles
import { Common } from '../../styles'
import { Container, Row, Col } from 'reactstrap'
const { Wrapper, ForgotPassNode, Title } = Common.ForgotPassStyle

export const ForgotPassContainer = memo(({ children, title }) => (
  <Wrapper>
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={8}>
          <ForgotPassNode>
            <Title>{title}</Title>
            {children}
          </ForgotPassNode>
        </Col>
      </Row>
    </Container>
  </Wrapper>
))
