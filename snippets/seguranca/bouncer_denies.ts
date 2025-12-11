import { editPost } from '#abilities/main'
import Post from '#models/post'
import router from '@adonisjs/core/services/router'

router.put('posts/:id', async ({ bouncer, params, response }) => {
  const post = await Post.findOrFail(params.id)

  if (await bouncer.denies(editPost, post)) {
    return response.forbidden('Você não pode editar este post')
  }

  return 'Você pode editar o post'
})
