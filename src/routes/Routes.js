import { AccountRoutes } from '../application/Account/Account.routes'
import { AuthRoutes } from '../application/Auth/Auth.routes'

export const Routes = [
  ...AuthRoutes,
  ...AccountRoutes,
  // Others routes
]
