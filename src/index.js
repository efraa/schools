import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { App } from './containers/App'
import * as serviceWorker from './serviceWorker'

render(<App />, document.getElementById('app'))
serviceWorker.unregister()
