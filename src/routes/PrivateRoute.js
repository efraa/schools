import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ isAuth, redirect, component: Comp, ...props }) =>
  isAuth ? (
    <Route {...props} render={p => <Comp {...props} {...p} />} />
  ) : (
    <Redirect to={redirect || '/auth'} />
  )
