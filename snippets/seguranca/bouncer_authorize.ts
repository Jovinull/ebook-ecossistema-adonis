import { editPost } from '#abilities/main'
import Post from '#models/post'
import router from '@adonisjs/core/services/router'

router.put('posts/:id', async ({ bouncer, params }) => {
  const post = await Post.findOrFail(params.id)

  await bouncer.authorize(editPost, post)

  // Se chegou aqui, está autorizado
})
