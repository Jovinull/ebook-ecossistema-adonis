import router from '@adonisjs/core/services/router'

router.post('/signup', ({ session, request, response }) => {
  // validação falhou
  session.flashOnly(['username', 'email'])
  // OU: session.flashAll()
  // OU: session.flashExcept(['password'])
  return response.redirect().back()
})

router.post('/resubmit', ({ session, response }) => {
  session.reflashOnly(['notification'])
  return response.redirect().back()
})
