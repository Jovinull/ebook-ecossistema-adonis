import router from '@adonisjs/core/services/router'

router.post('/login', async ({ session }) => {
  // ... autenticação bem sucedida
  session.regenerate() // novo ID será aplicado ao final da requisição
  return 'ok'
})
