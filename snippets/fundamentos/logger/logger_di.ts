import User from '#models/user'
import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'

@inject()
export class UserService {
  constructor(protected logger: Logger) {}

  async find(userId: string | number) {
    this.logger.info('Fetching user by id %s', userId)
    return User.find(userId)
  }
}
