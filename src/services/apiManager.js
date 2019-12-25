import instance from 'axios'
import { apiRoute, headers } from './apiConnection'

const api = instance.create({
  baseURL: apiRoute,
  headers,
})

export const API = {
  post: async (endpoint, data) =>
    await api.post(endpoint, data, {
      headers: {
        ...headers,
        Authorization: localStorage.token,
      },
    }),

  put: async (endpoint, data) =>
    await api.put(endpoint, data, {
      headers: {
        ...headers,
        Authorization: localStorage.token,
      },
    }),

  get: async endpoint =>
    await api.get(endpoint, {
      headers: {
        ...headers,
        Authorization: localStorage.token,
      },
    }),
}
