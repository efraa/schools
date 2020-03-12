import { verifyTokenAndGetUser } from '../../utils/jwt'
import { AuthService } from '../../services'

import { alert } from './setAlert'
import { types } from '../types'

const {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SET_CURRENT_USER,
  LOGOUT,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_LOADING,
  RESET_PASSWORD_GET_USER_SUCCESS,
  RESET_PASSWORD_GET_USER_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} = types

// Signup
export const signup = user => async dispatch => {
  try {
    const res = await AuthService.signup(user)
    if (res.data) dispatch(authUser(res.data.token, SIGNUP_SUCCESS))
  } catch (err) {
    alert(err.response, SIGNUP_FAIL, dispatch)
  }
}

// Auth - Get User Token
export const login = user => async dispatch => {
  try {
    const res = await AuthService.auth(user)
    if (res.data.token) dispatch(authUser(res.data.token))
  } catch (err) {
    alert(err.response, LOGIN_FAIL, dispatch)
  }
}

// Forgot Password
export const forgotPassword = (email, history) => async dispatch => {
  try {
    dispatch({ type: FORGOT_PASSWORD_LOADING })
    const res = await AuthService.forgotPassword(email)
    if (res.data) alert(res, FORGOT_PASSWORD_SUCCESS, dispatch)

    history.push('/forgot-password/check-your-email')
  } catch (err) {
    alert(err.response, FORGOT_PASSWORD_FAIL, dispatch)
  }
}

// Forgot Password - Expire
export const forgotPassIsExpire = (token, history) => async dispatch => {
  try {
    const res = await AuthService.forgotPassIsExpire(token)
    if (res.data) {
      dispatch({
        type: RESET_PASSWORD_GET_USER_SUCCESS,
        status: res.data,
      })
    }
  } catch (err) {
    alert(err.response, RESET_PASSWORD_GET_USER_FAIL, dispatch)
    history.push('/forgot-password')
  }
}

// Reset Password
export const resetPassword = (
  password,
  { token, history }
) => async dispatch => {
  try {
    const res = await AuthService.resetPassword(password, token)
    if (res.data) alert(res, RESET_PASSWORD_SUCCESS, dispatch)

    history.push('/auth')
  } catch (err) {
    alert(err.response, RESET_PASSWORD_FAIL, dispatch)
  }
}

// set User
export const authUser = (token, type = LOGIN_SUCCESS) => async dispatch => {
  dispatch({
    type,
    token,
  })
  // Decode token and get user info and exp
  const decoded = await verifyTokenAndGetUser(token)
  // Set user
  dispatch(setUser(decoded))
}

// set User
export const setUser = data => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    user: data.user,
  })
}

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
