// start/routes.ts
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('payments', () => {}).use(middleware.auth({ guard: 'web' }))
