import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Head } from './Head'

export const PrivateRoute = ({
  isAuth,
  redirect,
  title,
  component: Comp,
  ...props
}) =>
  isAuth ? (
    <Route {...props} render={p => <Comp {...props} {...p} />} />
  ) : (
    <>
      <Head title={title} />
      <Redirect to={redirect || '/auth'} />
    </>
  )
