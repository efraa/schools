import React, { Suspense, lazy } from 'react'
import { Spinner } from '../core/components/Spinner'
import { PrivateRoute } from '../core/routes'

// Views
const Home = lazy(() => import('./views/HomePage'))
const Profile = lazy(() => import('./views/Profile'))

const AccountRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <PrivateRoute
      isAuth={isAuth}
      path="/account/:username"
      component={Profile}
    />
    <PrivateRoute isAuth={isAuth} path="/home" component={Home} />
  </Suspense>
)

export default AccountRoutes
