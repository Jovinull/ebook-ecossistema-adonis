import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ inertia }: HttpContext) {
    const post = await Post.findOrFail(1)

    return inertia.render('posts/details', post, {
      title: post.title,
      description: post.description,
    })
  }
}
