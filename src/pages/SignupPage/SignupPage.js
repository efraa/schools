import React, { useState } from 'react'
import { connect } from 'react-redux'
import Validator from 'simple-react-validator'
import { Link } from 'react-router-dom'

import { AuthContainer } from '../../containers/AuthContainer'
import { Container } from '../../containers/Container'
import { Field } from '../../components/Forms/Field'
import { Button } from '../../components/Forms/Button'
import { Title } from '../../components/Title'

// Utils
import { validations } from '../../utils/config'

// Actions
import { signup } from '../../store/actions'

const SignupPage = ({ meta, signup }) => {
  const [data, setData] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    role: meta.role,
    codeSchool: '',
    validator: new Validator(validations),
  })

  const {
    name,
    lastname,
    username,
    email,
    password,
    role,
    codeSchool,
    validator,
  } = data

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()
    setData({ ...data })
    if (validator.allValid()) {
      const user = {
        name,
        lastname,
        username,
        email,
        role,
        codeSchool,
        password,
      }
      await signup(user)
    } else validator.showMessages()
  }

  return (
    <AuthContainer img={meta.image}>
      <form onSubmit={e => onSubmit(e)}>
        <Container>
          <div className="col-12 auth__title">
            <Title text={meta.title} />
          </div>

          <div className="col-12 mb-lg-3">
            <p className="marked">Or use other mail credentials.</p>
          </div>

          <Field
            placeholder="Name"
            value={name}
            name="name"
            onChange={e => onChange(e)}
            wrapper="col-md-6"
          >
            {validator.message('name', name, 'required|alpha_space')}
          </Field>

          <Field
            placeholder="Lastname"
            value={lastname}
            name="lastname"
            onChange={e => onChange(e)}
            wrapper="col-md-6"
          >
            {validator.message('lastname', lastname, 'required|alpha_space')}
          </Field>

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
            {validator.message('username', username, 'required|alpha_num_dash')}
          </Field>

          <Field
            placeholder="Organization code"
            name="codeSchool"
            value={codeSchool}
            onChange={e => onChange(e)}
            wrapper="col-md-6"
          >
            {validator.message(
              'Organization code',
              codeSchool,
              'required|alpha_num'
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

          <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between align-items-center mt-4">
            <p>
              By signing up, you agree to School's <br />
              <Link to="/signup"> Terms of Service </Link> and
              <Link to="/signup"> Privacy Policy.</Link>
            </p>

            <Button text="Sign up" type="submit" />
          </div>
        </Container>
      </form>
    </AuthContainer>
  )
}

export default connect(null, { signup })(SignupPage)
