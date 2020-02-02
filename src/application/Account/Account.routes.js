import React, { Suspense, lazy } from 'react'
import { Spinner } from '../core/components/Spinner'
import { Switch } from 'react-router-dom'
import { PrivateRoute } from '../../routes'

// Views
const Home = lazy(() => import('./screens/HomePage'))
const Profile = lazy(() => import('./screens/Profile'))

const AccountRoutes = ({ isAuth }) => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      <PrivateRoute
        isAuth={isAuth}
        path="/account/:username"
        component={Profile}
      />
      <PrivateRoute isAuth={isAuth} path="/home" component={Home} />
    </Switch>
  </Suspense>
)

export default AccountRoutes
