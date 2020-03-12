import React, { useEffect, memo, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { setUserFromToken } from './utils/setUserFromToken'
import Routes from './routing'
import { store } from './store'

// Styles
import { GlobalStyle } from './styles'

// Components
import { Spinner } from './components/Spinner'
const Header = lazy(() => import('./components/Header'))
const Alert = lazy(() => import('./components/Alert'))

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
          <Route component={Routes} />
        </Router>
      </Suspense>
    </Provider>
  )
})
