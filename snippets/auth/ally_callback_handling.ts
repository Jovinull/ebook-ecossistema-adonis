import router from '@adonisjs/core/services/router'

router.get('/github/callback', async ({ ally }) => {
  const gh = ally.use('github')

  if (gh.accessDenied()) return 'Você cancelou o login'
  if (gh.stateMisMatch()) return 'Não foi possível verificar a requisição. Tente novamente'
  if (gh.hasError()) return gh.getError()

  const user = await gh.user()
  return user
})
