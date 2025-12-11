import { editPost } from '#abilities/main'
import Post from '#models/post'
import router from '@adonisjs/core/services/router'

router.put('posts/:id', async ({ bouncer, params, response }) => {
  const post = await Post.findOrFail(params.id)

  if (await bouncer.allows(editPost, post)) {
    return 'Você pode editar o post'
  }

  return response.forbidden('Você não pode editar este post')
})
