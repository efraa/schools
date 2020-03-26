import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Head } from './Head'

export const PublicRoute = ({
  isAuth,
  redirect,
  title,
  component: Comp,
  ...props
}) =>
  isAuth ? (
    <Redirect to={redirect || '/home'} />
  ) : (
    <>
      <Head title={title} />
      <Route {...props} render={p => <Comp {...props} {...p} />} />
    </>
  )
