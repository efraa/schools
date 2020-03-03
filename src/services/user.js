import { API } from './api'

export const UserService = {
  get: username => API.get(`user/${username}`),
}
