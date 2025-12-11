import type { HttpContext } from '@adonisjs/core/http'

export class UsersController {
  index({ inertia }: HttpContext) {
    return inertia.render('users/index', {
      users: [
        { id: 1, name: 'julien' },
        { id: 2, name: 'virk' },
      ],
    })
  }
}
