import router from '@adonisjs/core/services/router'

router.get('/', () => {
  // return simples
  return 'This is the homepage.'
})

router.get('/send', ({ response }) => {
  response.send('This is the homepage')
  response.send('<p> This is the homepage </p>')
  response.send({ page: 'home' })
  response.send(new Date()) // vira ISO string
  return 'ok'
})
