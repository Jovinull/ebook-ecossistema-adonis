import router from '@adonisjs/core/services/router'
// import Post from '#models/post' // exemplo

router.get('posts/:id/edit', async ({ response, auth, params }) => {
  // const post = await Post.findByOrFail(params.id)
  const canEdit = auth?.user && true // exemplo
  if (!canEdit) {
    response.abort({ message: 'Cannot edit post' }, 403)
  }
  return 'ok'
})
