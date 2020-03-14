import { verifyTokenAndGetUser } from './jwt'

// Redux
import { store } from '../store'

// Actions
import { setUser } from '../store/actions/authentication'
import { authentication, basics } from '../store/types'

export const setUserFromToken = async () => {
  try {
    // Check for token and set
    const token = localStorage.token
    if (token) {
      // Decode token and get user info and exp
      const user = await verifyTokenAndGetUser(token)
      if (user) store.dispatch(setUser(user))
    } else store.dispatch({ type: basics.LOADED })
  } catch (err) {
    store.dispatch({ type: authentication.LOGOUT })
  }
}
