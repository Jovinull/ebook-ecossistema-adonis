import router from '@adonisjs/core/services/router'

router.get('/plain', ({ request, response }) => {
  response.plainCookie('user', { id: 1 }, { httpOnly: false })
  const user = request.plainCookie('user')
  return { user }
})

router.get('/plain-token', ({ request, response }) => {
  const tokenValue = 'already_encoded_token'
  response.plainCookie('token', tokenValue, { httpOnly: true, encode: false })
  const token = request.plainCookie('token', { encoded: false })
  return { token }
})
