import React, { Suspense, lazy } from 'react'
import { Spinner } from '../core/components/Spinner'
import { PublicRoute, PrivateRoute } from '../core/routes'

// Views
const Login = lazy(() => import('./views/Login'))
// const SignupRoutes = lazy(() => import('./SignupRoutes'))
const Logout = lazy(() => import('./views/Logout'))
const SignupSchool = lazy(() => import('./views/SchoolViews/Signup'))
const CheckEmail = lazy(() => import('./views/CheckEmail'))
const ForgotPassword = lazy(() => import('./views/ForgotPassword'))
const ResetPassword = lazy(() => import('./views/ResetPassword'))
const SignupLanding = lazy(() => import('./views/SignupLanding'))

const AuthRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
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
  </Suspense>
)

export default AuthRoutes
