import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Spinner } from './core/components/Spinner'

// Routes
const AuthRoutes = lazy(() => import('./Auth/Auth.routes'))
const AccountRoutes = lazy(() => import('./Account/Account.routes'))

const Routes = ({ isAuth, loading }) =>
  !loading && (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <AuthRoutes isAuth={isAuth} />
        <AccountRoutes isAuth={isAuth} />
        {/*<SignupRoutes isAuth={isAuth} /> */}
      </Switch>
    </Suspense>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
