import { lazy } from 'react'
import { Roles } from '../../utils/config'
import ImageTeacher from '../../images/signup-teacher.svg'
import ImageStudent from '../../images/signup-student.svg'

// Screens
const Login = lazy(() => import('./screens/Login'))
const Logout = lazy(() => import('./screens/Logout'))
const SignupSchool = lazy(() => import('./screens/School/SchoolSignup'))
const CheckEmail = lazy(() => import('./screens/CheckEmail'))
const ForgotPassword = lazy(() => import('./screens/ForgotPassword'))
const ResetPassword = lazy(() => import('./screens/ResetPassword'))
const SignupLanding = lazy(() => import('./screens/SignupLanding'))
const Signup = lazy(() => import('./screens/Signup'))

export const AuthRoutes = [
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
    path: '/signup-school',
    component: SignupSchool,
    exact: true,
    isProtected: false,
  },
  {
    path: '/signup-teacher',
    component: Signup,
    exact: false,
    isProtected: false,
    meta: {
      role: Roles.Teacher,
      image: ImageTeacher,
      title: 'Sign up as a teacher account.',
    },
  },
  {
    path: '/signup-student',
    component: Signup,
    exact: true,
    isProtected: false,
    meta: {
      role: Roles.Student,
      image: ImageStudent,
      title: 'Sign up as a student account.',
    },
  },
  {
    path: '/signup',
    component: SignupLanding,
    exact: true,
    isProtected: false,
  },
]
