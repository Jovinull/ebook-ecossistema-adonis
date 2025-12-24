import { BaseCommand, args } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  @args.string({
    description: 'Name of the user',
    required: false,
    default: 'guest',
  })
  declare name: string

  async run() {
    this.logger.info(`Hello, ${this.name}!`)
  }
}
