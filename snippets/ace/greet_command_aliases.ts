import { BaseCommand } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'
  static aliases = ['welcome', 'sayhi']

  async run() {
    this.logger.info('Hello!')
  }
}
