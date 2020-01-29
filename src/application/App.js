import React, { useEffect, memo, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './App.routes'
import { setUserFromToken } from '../contexts/utils/jwt/setUserFromToken'
import store from './core/store'

// Styles
import { GlobalStyle } from './core/styles'

// Components
import { Spinner } from './core/components/Spinner'
const Header = lazy(() => import('./core/components/Header'))
const Alert = lazy(() => import('./core/components/Alert'))

export const App = memo(() => {
  useEffect(() => {
    setUserFromToken()
  }, [])

  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Alert />
        <Router>
          <Header />
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  )
})
