import router from '@adonisjs/core/services/router'

router.get('/encrypted', ({ request, response }) => {
  response.encryptedCookie('user_id', 1)
  const uid = request.encryptedCookie('user_id')
  return { uid }
})
