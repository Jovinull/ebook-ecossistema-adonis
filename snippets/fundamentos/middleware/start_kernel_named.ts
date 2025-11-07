// start/kernel.ts (trecho: coleção nomeada)
import router from '@adonisjs/core/services/router'

export const middleware = router.named({
  auth: () => import('#middleware/auth_middleware'),
  userLocation: () => import('#middleware/user_location_middleware'),
})
