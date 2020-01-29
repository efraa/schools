import { Alert } from '../actions'

// Set New Alerts
export const alert = (response, type, dispatch) => {
  const { data, status } = response
  if (data && data.length)
    data.forEach(alert => dispatch(Alert(alert.msg, status)))

  dispatch({ type })
}
