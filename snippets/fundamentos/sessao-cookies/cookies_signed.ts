import router from '@adonisjs/core/services/router'

router.get('/signed', ({ request, response }) => {
  response.cookie('user_id', 1) // assinado por padrão
  const uid = request.cookie('user_id')
  return { uid }
})
