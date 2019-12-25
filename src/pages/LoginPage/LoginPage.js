import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useManageForm } from '../../hooks'
// components
import { AuthContainer } from '../../containers/AuthContainer'
import { Container } from '../../containers/Container'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Title } from '../../components/Title'
import Image from '../../assets/images/login.svg'
// Action
import { login } from '../../store/actions'

const LoginPage = ({ login }) => {
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
        <Container>
          <div className="col-12 auth__title">
            <Title text="Log in to your account." />
          </div>

          <div className="col-12 mb-lg-3">
            <p className="marked">Or use your email account.</p>
          </div>

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

          <div className="col-12 d-flex justify-content-between align-items-center mt-4">
            <Link className="mr-3" to="/forgot-password">
              {' '}
              <b>Forgot password?</b>{' '}
            </Link>
            <Button
              text="Log in"
              type="submit"
              classes={!isValid ? 'disabled' : ''}
              disabled={!isValid}
            />
          </div>
          <div className="col-12 mt-5">
            <p>
              Don't have an account?
              <Link to="/signup"> Sign up!</Link>
            </p>
          </div>
        </Container>
      </form>
    </AuthContainer>
  )
}

export default connect(null, { login })(LoginPage)
