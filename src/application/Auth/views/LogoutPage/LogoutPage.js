import React, { memo } from 'react'
import { connect } from 'react-redux'
// Actions
import { logout } from '../../../core/store/actions'
// Components
import { Container } from '../../../core/containers/Container'
import { Button } from '../../../core/components/Forms/Button'
import {
  Logout,
  Form,
  LogoutContainer,
  Content,
  Title,
  Text,
  Buttons,
} from './Style'

const LogoutPage = memo(({ logout }) => (
  <Logout>
    <Container>
      <Form
        className="col-12 col-md-8 col-lg-5"
        onSubmit={e => {
          e.preventDefault()
          logout()
        }}
      >
        <LogoutContainer>
          <Content>
            <Title>Log out of Schools?</Title>
            <Text>You can always log back in at any time.</Text>
          </Content>
          <Buttons>
            <Button
              className="mr-3"
              type="button"
              secound
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button type="submit">Log out</Button>
          </Buttons>
        </LogoutContainer>
      </Form>
    </Container>
  </Logout>
))

export default connect(null, { logout })(LogoutPage)
