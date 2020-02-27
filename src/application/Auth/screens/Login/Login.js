import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useManageForm } from '../../../../hooks'
// components
import { AuthContainer } from '../../containers/AuthContainer'
import { Field } from '../../../core/components/Forms/Field'
import { Button } from '../../../core/components/Forms/Button'
import { Title } from '../../../core/components/Title'
import Image from './../../../../images/login.svg'
// Action
import { login } from '../../../../store/actions'
// Styles
import { Common } from '../../../../styles'
import { LoginTitle } from './Style'
import { Container, Row, Col } from 'reactstrap'

const Login = ({ login }) => {
  const { onSubmit, onChange, isValid, validator, data } = useManageForm({
    fields: {
      emailOrUsername: '',
      password: '',
    },
    connect: login,
  })
  const { emailOrUsername, password } = data

  return (
    <AuthContainer img={Image}>
      <form onSubmit={e => onSubmit(e)}>
        <Container fluid={true}>
          <Row>
            <LoginTitle>
              <Title text="Log in to your account." />
            </LoginTitle>
            <Col xs={12} className="mb-lg-3">
              <Common.Marked>Or use your email account.</Common.Marked>
            </Col>

            <Field
              placeholder="Email address or Username"
              value={emailOrUsername}
              name="emailOrUsername"
              onChange={e => onChange(e)}
            >
              {emailOrUsername.includes('@')
                ? validator.message(
                    'Email address',
                    emailOrUsername,
                    'required|email'
                  )
                : validator.message(
                    'Email address or Username',
                    emailOrUsername,
                    'required|alpha_num_dash'
                  )}
            </Field>

            <Field
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            >
              {validator.message('password', password, 'required|min:6')}
            </Field>

            <Col
              xs={12}
              className="d-flex justify-content-between align-items-center mt-4"
            >
              <Link className="mr-3" to="/forgot-password">
                {' '}
                <b>Forgot password?</b>{' '}
              </Link>
              <Button type="submit" disabled={!isValid}>
                Log in
              </Button>
            </Col>
            <Col xs={12} className="mt-5">
              <p>
                Don't have an account?
                <Link to="/signup"> Sign up!</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </form>
    </AuthContainer>
  )
}

export default connect(null, { login })(Login)
