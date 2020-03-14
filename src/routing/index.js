import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Spinner } from '../components/Spinner'

// Routes
import { PublicRoute, PrivateRoute } from './helpers'
import { authenticationRoutes } from './routes/authentication'
import { basicsRoutes } from './routes/basics'

export const routes = [
  ...authenticationRoutes,
  ...basicsRoutes,
  // Others routes
]

const Routing = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {routes.map(({ isProtected, ...props }, key) =>
        isProtected ? (
          <PrivateRoute key={key} isAuth={isAuth} {...props} />
        ) : (
          <PublicRoute key={key} isAuth={isAuth} {...props} />
        )
      )}
    </Switch>
  </Suspense>
)

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(Routing)
