import router from '@adonisjs/core/services/router'

router.get('posts/:slug/comments/:id', ({ request }) => {
  const params = request.params() // { slug: 'hello-world', id: '2' }
  const slug = request.param('slug')
  const commentId = request.param('id')
  return { slug, commentId, params }
})
