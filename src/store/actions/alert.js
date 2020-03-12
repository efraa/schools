import { basics } from '../types'
const { SET_ALERT, REMOVE_ALERT } = basics

export const Alert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = new Date().getTime()
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  })

  setTimeout(() => dispatch({ type: REMOVE_ALERT, id }), timeout)
}
