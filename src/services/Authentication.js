import { API } from './apiManager'

export const AuthService = {
  signup: async user => await API.post('signup', user),

  auth: async user => await API.post('auth', user),

  forgotPassword: async email => await API.post('forgot-password', email),
}
