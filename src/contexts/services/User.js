import { API } from './ApiManager'

export const UserService = {
  get: async username => await API.get(`user/${username}`),
}
