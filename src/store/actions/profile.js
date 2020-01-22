import { UserService } from '../../services'

import { alert } from '../actions/setAlert'
import { types } from '../types'

const { GET_USER, GET_USER_FAIL } = types

// Signup
export const getProfile = username => async dispatch => {
  try {
    const res = await UserService.get(username)
    if (res.data)
      dispatch({
        type: GET_USER,
        user: res.data,
      })
  } catch (err) {
    alert(err.response, GET_USER_FAIL, dispatch)
  }
}
