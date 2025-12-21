import router from '@adonisjs/core/services/router'

router.get('/google/redirect', ({ ally }) => {
  return ally.use('google').redirect((request) => {
    request.param('access_type', 'offline').param('prompt', 'select_account')
  })
})
