import React, { Suspense, lazy } from 'react'
import { Spinner } from '../core/components/Spinner'
import { Switch } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from '../../routes'

// Views
const Login = lazy(() => import('./screens/Login'))
const Logout = lazy(() => import('./screens/Logout'))
const SignupSchool = lazy(() => import('./screens/School/SchoolSignup'))
const CheckEmail = lazy(() => import('./screens/CheckEmail'))
const ForgotPassword = lazy(() => import('./screens/ForgotPassword'))
const ResetPassword = lazy(() => import('./screens/ResetPassword'))
const SignupLanding = lazy(() => import('./screens/SignupLanding'))

const AuthRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <PublicRoute isAuth={isAuth} path="/auth" component={Login} />
      <PublicRoute
        isAuth={isAuth}
        path="/signup-school"
        component={SignupSchool}
      />
      <PublicRoute
        isAuth={isAuth}
        path="/forgot-password/check-your-email"
        component={CheckEmail}
      />
      <PublicRoute
        isAuth={isAuth}
        path="/forgot-password"
        component={ForgotPassword}
      />
      <PublicRoute
        isAuth={isAuth}
        path="/reset-password/:token"
        component={ResetPassword}
      />
      <PublicRoute isAuth={isAuth} path="/signup" component={SignupLanding} />
      <PrivateRoute isAuth={isAuth} path="/logout" component={Logout} />
    </Switch>
  </Suspense>
)

export default AuthRoutes
