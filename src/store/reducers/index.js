import { combineReducers } from 'redux'

import auth from './auth'
import { alert } from './alert'
import { profile } from './profile'

const appReducer = combineReducers({
  auth,
  alert,
  profile,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') state = undefined

  return appReducer(state, action)
}

export default rootReducer
