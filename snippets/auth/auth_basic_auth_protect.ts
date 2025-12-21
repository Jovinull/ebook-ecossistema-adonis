import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/dashboard', ({ auth }) => {
  const user = auth.getUserOrFail()
  return `Autenticado como ${user.email}`
}).use(middleware.auth({ guards: ['basicAuth'] }))
