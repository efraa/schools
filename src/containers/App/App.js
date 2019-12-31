import React, { useEffect, memo, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from '../../routes'
import { setUserFromToken } from '../../utils/jwt/setUserFromToken'
import store from '../../store'

// Styles
import { GlobalStyle } from '../../styles'

// Components
import { Spinner } from '../../components/Spinner'
const Header = lazy(() => import('../../components/Header'))
const Alert = lazy(() => import('../../components/Alert'))

const App = memo(() => {
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

export default App
