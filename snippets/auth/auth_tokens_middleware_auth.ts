import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.post('projects', async ({ auth }) => {
  return {
    authenticatedVia: auth.authenticatedViaGuard,
    user: auth.user,
    token: auth.user?.currentAccessToken,
  }
}).use(middleware.auth({ guards: ['api'] }))
