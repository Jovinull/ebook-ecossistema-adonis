// start/kernel.ts (trecho: router middleware globais)
import router from '@adonisjs/core/services/router'

router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  // () => import('@adonisjs/session/session_middleware'),
  // () => import('@adonisjs/auth/auth_middleware'),
])
