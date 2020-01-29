import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Spinner } from './core/components/Spinner'

// const HomePage = lazy(() => import('../pages/HomePage'))
// const Profile = lazy(() => import('../pages/Profile'))
const AuthRoutes = lazy(() => import('./Auth/Auth.routes'))

const Routes = ({ isAuth, loading }) =>
  !loading && (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <AuthRoutes isAuth={isAuth} />
        {/*
          <PrivateRoute
            isAuth={isAuth}
            path="/account/:username"
            component={Profile}
          />
        <SignupRoutes isAuth={isAuth} /> */}
      </Switch>
    </Suspense>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routes)
