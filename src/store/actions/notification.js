import { types } from '../types'
const { SET_NOTIFICATION, REMOVE_NOTIFICATION } = types

export const Notification = (
  msg,
  notificationType,
  timeout = 5000
) => dispatch => {
  const id = new Date().getTime()
  dispatch({
    type: SET_NOTIFICATION,
    payload: { msg, notificationType, id },
  })

  setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, id }), timeout)
}
