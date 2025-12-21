import User from '#models/user'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/tokens', async ({ auth }) => {
  return User.accessTokens.all(auth.getUserOrFail())
}).use(middleware.auth({ guards: ['api'] }))
