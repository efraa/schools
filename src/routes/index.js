import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// Routes
import { SignupRoutes } from './SignupRoutes'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'

const Routes = ({ isAuth, loading }) =>
  !loading && (
    <>
      <Switch>
        <PublicRoute isAuth={isAuth} path="/auth" component={LoginPage} />
        <PrivateRoute isAuth={isAuth} path="/home" component={HomePage} />
        <PrivateRoute isAuth={isAuth} path="/logout" component={LogoutPage} />

        <Route render={props => <SignupRoutes {...props} isAuth={isAuth} />} />
      </Switch>
    </>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
