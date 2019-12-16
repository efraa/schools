import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// Routes
import { Home } from '../pages/Home'
import { Signup } from '../pages/Signup'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'

const Routes = ({ isAuth, loading }) =>
  !loading && (
    <>
      <Switch>
        <PublicRoute isAuth={isAuth} path="/signup" component={Signup} />
        <PublicRoute isAuth={isAuth} path="/auth" component={LoginPage} />
        <PrivateRoute isAuth={isAuth} path="/home" component={Home} />
        <PrivateRoute isAuth={isAuth} path="/logout" component={LogoutPage} />

        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
