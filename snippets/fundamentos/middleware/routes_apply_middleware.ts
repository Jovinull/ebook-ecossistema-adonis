// start/routes.ts
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router.get('posts', () => {}).use(middleware.userLocation())

router.get('secure', () => {}).use([middleware.userLocation(), middleware.auth()])
