import { AUTH } from './auth.types'
import { OTHERS } from './basic.types'
import { USER } from './user.types'

export const types = {
  ...AUTH,
  ...USER,
  ...OTHERS,
}
