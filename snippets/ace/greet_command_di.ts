import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import { BaseCommand } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  @inject()
  async prepare(userService: UserService) {
    void userService
  }

  @inject()
  async interact(userService: UserService) {
    void userService
  }

  @inject()
  async run(userService: UserService) {
    void userService
    this.logger.success('Injected service is available.')
  }

  @inject()
  async completed(userService: UserService) {
    void userService
  }
}
