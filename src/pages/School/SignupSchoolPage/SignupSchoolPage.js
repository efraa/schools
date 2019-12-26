import React from 'react'
import { connect } from 'react-redux'
import { useManageForm } from '../../../hooks'
// components
import { Range } from '../../../components/Forms/Range'
import { Link } from 'react-router-dom'
import { AuthContainer } from '../../../containers/AuthContainer'
import { Container } from '../../../containers/Container'
import { Field } from '../../../components/Forms/Field'
import { Button } from '../../../components/Forms/Button'
import { Title } from '../../../components/Title'
import Image from '../../../assets/images/signup-school.svg'
// Actions
import { signup } from '../../../store/actions'

const SignupSchoolPage = ({ signup }) => {
  const {
    onSubmit,
    onChange,
    isValid,
    validator,
    data,
    setData,
  } = useManageForm({
    fields: {
      name: '',
      username: '',
      email: '',
      password: '',
      role: 'school',
      maxStudents: 25,
      maxTeachers: 8,
    },
    connect: signup,
  })
  const { name, username, email, password, maxStudents, maxTeachers } = data

  return (
    <AuthContainer img={Image}>
      <form onSubmit={e => onSubmit(e)}>
        <Container fluid>
          <div className="col-12 auth__title">
            <Title text="Sign up as a school account." />
          </div>

          <div className="col-12 mb-lg-3">
            <p className="marked">Or use other mail credentials.</p>
          </div>

          <Field
            placeholder="Organization name"
            value={name}
            name="name"
            onChange={e => onChange(e)}
          >
            {validator.message('name', name, 'required|alpha_space')}
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
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            wrapper="mb-2 col-md-6"
          >
            {validator.message('password', password, 'required|min:6')}
          </Field>

          <Range
            label="Approximate students in their classrooms"
            step={5}
            min={5}
            max={50}
            value={maxStudents}
            onChange={maxStudents => setData({ ...data, maxStudents })}
          />

          <Range
            label="Approximate teachers in a classroom"
            step={1}
            min={5}
            max={20}
            value={maxTeachers}
            onChange={maxTeachers => setData({ ...data, maxTeachers })}
          />

          <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between align-items-center mt-4">
            <p>
              By signing up, you agree to School's <br />
              <Link to="/signup"> Terms of Service </Link> and
              <Link to="/signup"> Privacy Policy.</Link>
            </p>

            <Button
              text="Sign up"
              type="submit"
              classes={!isValid ? 'disabled' : ''}
            />
          </div>
        </Container>
      </form>
    </AuthContainer>
  )
}

export default connect(null, { signup })(SignupSchoolPage)
