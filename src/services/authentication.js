import { API } from './api'

export const AuthService = {
  signup: user => API.post('signup', user),

  auth: user => API.post('auth', user),

  forgotPassword: email => API.post('forgot-password', email),

  forgotPassIsExpire: token => API.get(`forgot-password-expire/${token}`),

  resetPassword: (password, token) =>
    API.put(`reset-password/${token}`, password),

  updateUser: (username, updated) => API.put(`user/${username}`, updated),
}
