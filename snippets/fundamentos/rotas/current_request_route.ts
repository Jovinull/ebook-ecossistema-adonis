import router from '@adonisjs/core/services/router'

router.get('payments', ({ route }) => {
  console.log(route)
  return 'ok'
})

router
  .get('/posts/:id', ({ request }) => {
    if (request.matchesRoute('/posts/:id')) {
      // faça algo
    }
  })
  .as('posts.show')
