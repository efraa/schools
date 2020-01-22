import { API } from './apiManager'

export const UserService = {
  get: async username => await API.get(`user/${username}`),
}
