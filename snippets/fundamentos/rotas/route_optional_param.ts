import router from '@adonisjs/core/services/router'

router.get('/posts/:id?', ({ params }) => {
  if (!params.id) return 'Showing all posts'
  return `Showing post with id ${params.id}`
})
