import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Spinner } from '../application/core/components/Spinner'
import { Roles } from '../utils/config'
import ImageTeacher from '../images/signup-teacher.svg'
import ImageStudent from '../images/signup-student.svg'

// Routes of Signup
const Signup = lazy(() => import('../application/Auth/screens/Signup'))
const NotFoundPage = lazy(() =>
  import('../application/core/screens/NotFoundPage')
)

const SignupRoute = ({ isAuth, path, meta }) =>
  isAuth ? (
    <Redirect to="/home" />
  ) : (
    <Route
      exact
      path={path}
      render={props => <Signup {...props} path={path} meta={meta} />}
    />
  )

export const SignupRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
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
          image: ImageStudent,
          title: 'Sign up as a student account.',
        }}
      />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Suspense>
)

export default SignupRoutes
