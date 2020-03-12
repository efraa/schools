import { lazy } from 'react'

// Screens
const Login = lazy(() => import('../../screens/Login'))
const Logout = lazy(() => import('../../screens/Logout'))
const CheckEmail = lazy(() => import('../../screens/CheckEmail'))
const ForgotPassword = lazy(() => import('../../screens/ForgotPassword'))
const ResetPassword = lazy(() => import('../../screens/ResetPassword'))
const Signup = lazy(() => import('../../screens/Signup'))

export const authenticationRoutes = [
  {
    path: '/auth',
    component: Login,
    exact: true,
    isProtected: false,
  },
  {
    path: '/logout',
    component: Logout,
    exact: true,
    isProtected: true,
  },
  {
    path: '/forgot-password/check-your-email',
    component: CheckEmail,
    exact: true,
    isProtected: false,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
    isProtected: false,
  },
  {
    path: '/reset-password/:token',
    component: ResetPassword,
    exact: false,
    isProtected: false,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
    isProtected: false,
  },
]
