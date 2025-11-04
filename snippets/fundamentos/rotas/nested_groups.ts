import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router
      .group(() => {
        router.get('users', () => {}).as('users.index')       // api.v1.users.index
        router.get('payments', () => {}).as('payments.index') // api.v1.payments.index
      })
      .prefix('v1')
  })
  .prefix('api')
