import { lazy } from 'react'
// Screens
const Home = lazy(() => import('./screens/HomePage'))
const Profile = lazy(() => import('./screens/Profile'))

export const AccountRoutes = [
  {
    path: '/account/:username',
    component: Profile,
    exact: false,
    isProtected: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    isProtected: true,
  },
]
