import router from '@adonisjs/core/services/router'

router.get('/theme/:color', async ({ params, session, response }) => {
  session.put('theme', params.color)
  response.redirect('/')
})

router.get('/', async ({ session }) => {
  const colorTheme = session.get('theme', 'default')
  return `You are using ${colorTheme} color theme`
})
