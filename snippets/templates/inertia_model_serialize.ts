import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async edit({ inertia, params }: HttpContext) {
    const user = await User.findOrFail(params.id)

    const dto = user.serialize() as {
      id: number
      name: string
    }

    return inertia.render('user/edit', { user: dto })
  }
}
