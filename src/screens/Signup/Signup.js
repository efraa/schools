import React from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../hooks'
// components
import { Link } from 'react-router-dom'
import { AuthContainer } from '../../containers/AuthContainer'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Title } from '../../components/Title'
import { Col, Row, Container } from 'reactstrap'
// Actions
import { signup } from '../../store/actions'

const Signup = ({ signup }) => {
  const { onSubmit, onChange, isValid, validator, data } = useManageForm({
    fields: {
      username: '',
      email: '',
      password: '',
    },
    connect: signup,
  })
  const { username, email, password } = data

  return (
    <AuthContainer>
      <form onSubmit={e => onSubmit(e)}>
        <Container>
          <Row>
            <Col xs={12}>
              <Title text="Sign up as a school account." />
            </Col>

            <Field
              placeholder="Email address"
              value={email}
              name="email"
              type="email"
              onChange={e => onChange(e)}
            >
              {validator.message('email', email, 'required|email')}
            </Field>

            <Field
              placeholder="Username"
              value={username}
              name="username"
              onChange={e => onChange(e)}
              wrapper="col-md-6"
            >
              {validator.message(
                'username',
                username,
                'required|alpha_num_dash'
              )}
            </Field>

            <Field
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              wrapper="mb-2 col-md-6"
            >
              {validator.message('password', password, 'required|min:6')}
            </Field>
            <Col
              xs={12}
              className="d-flex flex-column flex-md-row justify-content-md-between align-items-center mt-4"
            >
              <p>
                By signing up, you agree to School's <br />
                <Link to="/signup"> Terms of Service </Link> and
                <Link to="/signup"> Privacy Policy.</Link>
              </p>

              <Button type="submit" disabled={!isValid}>
                Sign up
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </AuthContainer>
  )
}

export default connect(null, { signup })(Signup)
