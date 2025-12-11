import Post from '#models/post'
import PostPolicy from '#policies/post_policy'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async create({ bouncer, response }: HttpContext) {
    if (await bouncer.with(PostPolicy).denies('create')) {
      return response.forbidden('Não pode criar post')
    }

    // lógica normal de criação
  }

  async edit({ bouncer, params, response }: HttpContext) {
    const post = await Post.findOrFail(params.id)

    if (await bouncer.with(PostPolicy).denies('edit', post)) {
      return response.forbidden('Não pode editar')
    }

    // lógica normal de edição
  }
}
