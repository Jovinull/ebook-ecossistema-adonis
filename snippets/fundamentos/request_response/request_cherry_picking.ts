import router from '@adonisjs/core/services/router'

router.post('login', ({ request }) => {
  const credentials = request.only(['email', 'password'])
  return credentials
})

router.post('register', ({ request }) => {
  const userDetails = request.except(['password_confirmation'])
  return userDetails
})

router.post('comments', ({ request }) => {
  const email = request.input('email', null)
  const comment = request.input('body', '')
  return { email, comment }
})
