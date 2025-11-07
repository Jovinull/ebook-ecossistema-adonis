// start/routes.ts
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .resource('posts')
  .use(['create', 'store', 'update', 'destroy'], middleware.auth())
  .use('*', middleware.audit?.()) // exemplo: wildcard em todas as ações (se existir)
