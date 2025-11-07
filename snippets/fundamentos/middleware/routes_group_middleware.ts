// start/routes.ts
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('posts', () => {})
    router.get('users', () => {})
    router.get('payments', () => {})
  })
  .use(middleware.userLocation())
