import { post } from './api'

export const AuthService = {
  signup: async user => await post('signup', user),

  auth: async user => await post('auth', user),
}
