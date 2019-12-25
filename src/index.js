import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'
import * as serviceWorker from './serviceWorker'

// Styles
import './styles/index.scss'

render(<App />, document.getElementById('app'))
serviceWorker.unregister()
