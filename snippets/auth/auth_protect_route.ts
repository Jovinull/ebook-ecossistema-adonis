import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/dashboard', async ({ auth }) => {
  const user = auth.getUserOrFail()
  return `Olá ${user.email}`
}).use(middleware.auth())
