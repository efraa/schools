import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Utils
import { Roles } from '../utils/config'
import ImageTeacher from '../assets/images/signup-teacher.svg'

// Routes of Signup
import SignupPage from '../pages/SignupPage'

const SignupRoute = ({ isAuth, path, meta }) =>
  isAuth ? (
    <Redirect to="/home" />
  ) : (
    <Route
      exact
      path={path}
      render={props => <SignupPage {...props} path={path} meta={meta} />}
    />
  )

export const SignupRoutes = ({ isAuth }) => (
  <>
    <Switch>
      <SignupRoute
        path="/signup-teacher"
        isAuth={isAuth}
        meta={{
          role: Roles.Teacher,
          image: ImageTeacher,
          title: 'Sign up as a teacher account.',
        }}
      />

      <SignupRoute
        path="/signup-student"
        isAuth={isAuth}
        meta={{
          role: Roles.Student,
          image: ImageTeacher,
          title: 'Sign up as a student account.',
        }}
      />
    </Switch>
  </>
)

export default SignupRoutes
