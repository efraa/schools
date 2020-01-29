import { types } from '../types'
const { GET_USER, GET_USER_FAIL } = types

export const profile = (
  state = {
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...action.user,
        loading: true,
      }
    case GET_USER_FAIL:
      return {
        ...state,
        role: 'fail',
        loading: true,
      }
    default:
      return {
        ...state,
      }
  }
}
