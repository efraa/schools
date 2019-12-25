import { API } from './apiManager'

export const AuthService = {
  signup: async user => await API.post('signup', user),

  auth: async user => await API.post('auth', user),
}
