import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { Spinner } from '../components/Spinner'

// Routes
const HomePage = lazy(() => import('../pages/HomePage'))
const SignupRoutes = lazy(() => import('./SignupRoutes'))
const LogoutPage = lazy(() => import('../pages/LogoutPage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const SignupSchoolPage = lazy(() => import('../pages/School/SignupSchoolPage'))
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'))
const CheckEmail = lazy(() => import('../pages/CheckEmail'))
const ResetPassword = lazy(() => import('../pages/ResetPassword'))
const SignupLanding = lazy(() => import('../pages/SignupLanding'))
const Profile = lazy(() => import('../pages/Profile'))

const Routes = ({ isAuth, loading }) =>
  !loading && (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute isAuth={isAuth} path="/auth" component={LoginPage} />
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
        <PrivateRoute
          isAuth={isAuth}
          path="/account/:username"
          component={Profile}
        />
        <SignupRoutes isAuth={isAuth} />
      </Switch>
    </Suspense>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
