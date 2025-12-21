import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.post('/logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  return response.redirect('/login')
}).use(middleware.auth())
