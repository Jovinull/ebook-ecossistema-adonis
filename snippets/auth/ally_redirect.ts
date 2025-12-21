import router from '@adonisjs/core/services/router'

router.get('/github/redirect', ({ ally }) => {
  return ally.use('github').redirect()
})
