// app/controllers/posts_controller.ts
import { createPostValidator, updatePostValidator } from '#validators/post_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    // ... usar payload tipado
    return payload
  }

  async update({ request }: HttpContext) {
    const payload = await request.validateUsing(updatePostValidator)
    // ... usar payload tipado
    return payload
  }
}
