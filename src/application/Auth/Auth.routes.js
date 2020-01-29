import React, { Suspense, lazy } from 'react'
import { Spinner } from '../core/components/Spinner'
import { PublicRoute } from '../core/routes'

// Routes
const LoginPage = lazy(() => import('./views/LoginPage'))
// const SignupRoutes = lazy(() => import('./SignupRoutes'))
// const LogoutPage = lazy(() => import('../pages/LogoutPage'))
// const LoginPage = lazy(() => import('../pages/LoginPage'))
// const SignupSchoolPage = lazy(() => import('../pages/School/SignupSchoolPage'))
// const ForgotPassword = lazy(() => import('../pages/ForgotPassword'))
// const CheckEmail = lazy(() => import('../pages/CheckEmail'))
// const ResetPassword = lazy(() => import('../pages/ResetPassword'))
// const SignupLanding = lazy(() => import('../pages/SignupLanding'))

const AuthRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <PublicRoute isAuth={isAuth} path="/auth" component={LoginPage} />
    {/*
      <PublicRoute
        isAuth={isAuth}
        path="/signup-school"
        component={SignupSchoolPage}
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
      <PrivateRoute isAuth={isAuth} path="/home" component={HomePage} />
      <PrivateRoute isAuth={isAuth} path="/logout" component={LogoutPage} />
    */}
  </Suspense>
)

export default AuthRoutes
