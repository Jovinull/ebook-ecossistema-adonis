import { BaseCommand } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  async prepare() {
    this.logger.info('preparing')
  }

  async interact() {
    this.logger.info('interacting')
  }

  async run() {
    this.logger.info('running')
  }

  async completed() {
    this.logger.info('completed')
  }
}
