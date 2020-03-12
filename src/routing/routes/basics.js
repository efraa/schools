import { lazy } from 'react'

// Screens
const Home = lazy(() => import('../../screens/Home'))

export const basicsRoutes = [
  {
    path: '/home',
    component: Home,
    exact: true,
    isProtected: true,
  },
]
