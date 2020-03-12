import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ isAuth, redirect, component: Comp, ...props }) =>
  isAuth ? (
    <Redirect to={redirect || '/home'} />
  ) : (
    <Route {...props} render={p => <Comp {...props} {...p} />} />
  )
