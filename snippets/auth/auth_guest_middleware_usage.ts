import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/login', async () => {
  return 'login page'
}).use(middleware.guest())
