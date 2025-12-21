import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/me', async ({ auth }) => {
  const user = auth.getUserOrFail()
  return user
}).use(middleware.auth())
