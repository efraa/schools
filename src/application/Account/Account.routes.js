import React, { Suspense, lazy } from 'react'
import { Switch } from 'react-router-dom'
import { Spinner } from '../core/components'
import { PublicRoute } from '../core/routes'

// Routes
const LoginPage = lazy(() => import('./views/'))

export const SignupRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <PublicRoute isAuth={isAuth} path="/auth" component={LoginPage} />
    </Switch>
  </Suspense>
)

export default SignupRoutes
