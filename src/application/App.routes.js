import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Spinner } from './core/components/Spinner'
// Routes
import { PrivateRoute, PublicRoute, Routes } from '../routes'

const AppRoutes = ({ isAuth, loading }) =>
  !loading && (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {Routes.map(({ isProtected, ...props }, key) =>
          isProtected ? (
            <PrivateRoute key={key} isAuth={isAuth} {...props} />
          ) : (
            <PublicRoute key={key} isAuth={isAuth} {...props} />
          )
        )}
      </Switch>
    </Suspense>
  )

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {})(AppRoutes)
