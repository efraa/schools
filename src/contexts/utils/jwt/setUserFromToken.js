import { verifyTokenAndGetUser } from '.'

// Redux
import store from '../../../application/core/store'

// Actions
import { setUser } from '../../../application/core/store/actions/auth'
import { types } from '../../../application/core/store/types'
const { LOADED, LOGOUT } = types

export const setUserFromToken = async () => {
  try {
    // Check for token and set
    const token = localStorage.token
    if (token) {
      // Decode token and get user info and exp
      const user = await verifyTokenAndGetUser(token)
      if (user) store.dispatch(setUser(user))
    } else store.dispatch({ type: LOADED })
  } catch (err) {
    store.dispatch({ type: LOGOUT })
  }
}
