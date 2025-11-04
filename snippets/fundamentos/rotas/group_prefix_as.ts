import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('users', () => {}).as('users.index')     // api.users.index
    router.get('payments', () => {}).as('payments.index') // api.payments.index
  })
  .prefix('api')
  .as('api')
