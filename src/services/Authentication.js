import { API } from './ApiManager'

export const AuthService = {
  signup: async user => await API.post('signup', user),

  auth: async user => await API.post('auth', user),

  forgotPassword: async email => await API.post('forgot-password', email),

  forgotPassIsExpire: async token =>
    await API.get(`forgot-password-expire/${token}`),

  resetPassword: async (password, token) =>
    await API.put(`reset-password/${token}`, password),

  updateUser: async (username, updated) =>
    await API.put(`user/${username}`, updated),
}
