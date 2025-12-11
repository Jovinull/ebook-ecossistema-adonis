import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async store({ request, response }: HttpContext) {
    await User.create(request.body())
    return response.redirect().toRoute('users.index')
  }
}
