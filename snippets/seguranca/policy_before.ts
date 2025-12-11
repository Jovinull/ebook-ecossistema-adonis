import User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'

export default class PostPolicy extends BasePolicy {
  async before(user: User | null) {
    if (user && user.isAdmin) {
      return true
    }
  }

  // demais métodos (create, edit, delete, etc.) podem vir aqui
}
