import router from '@adonisjs/core/services/router'

router.post('projects', async ({ auth }) => {
  const user = await auth.authenticate()
  return { user }
})
