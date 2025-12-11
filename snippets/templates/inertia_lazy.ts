import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index({ inertia }: HttpContext) {
    return inertia.render('users/index', {
      // Sempre incluído na primeira visita, sempre avaliado
      users: await User.all(),

      // Sempre incluído na primeira visita, avaliado sob demanda em partial reloads
      usersLazy: () => User.all(),

      // Nunca incluído na primeira visita, só avaliado quando requisitado
      usersOptional: inertia.optional(() => User.all()),
    })
  }
}
