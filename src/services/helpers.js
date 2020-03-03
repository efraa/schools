export const getHeaders = (extra = {}) => ({
  'Content-Type': 'application/json',
  // TODO: this shouldn't work like this
  Authorization: localStorage.token,
  ...extra,
})

export const API_BASE = process.env.REACT_APP_API_URL
