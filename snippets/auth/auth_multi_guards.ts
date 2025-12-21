import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('/dashboard', async () => {
  return 'OK'
}).use(
  middleware.auth({
    guards: ['web', 'api'],
  })
)
