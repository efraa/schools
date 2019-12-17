import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { Spinner } from '../components/Spinner'

// Routes
const SignupRoutes = lazy(() => import('./SignupRoutes'))
const HomePage = lazy(() => import('../pages/HomePage'))
const LogoutPage = lazy(() => import('../pages/LogoutPage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))

const Routes = ({ isAuth, loading }) =>
  !loading && (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute isAuth={isAuth} path="/auth" component={LoginPage} />
        <PrivateRoute isAuth={isAuth} path="/home" component={HomePage} />
        <PrivateRoute isAuth={isAuth} path="/logout" component={LogoutPage} />

        <Route render={props => <SignupRoutes {...props} isAuth={isAuth} />} />
      </Switch>
    </Suspense>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
