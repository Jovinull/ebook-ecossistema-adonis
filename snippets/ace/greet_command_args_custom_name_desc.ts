import { BaseCommand, args } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  @args.string({
    argumentName: 'user-name',
    description: 'Name of the user',
  })
  declare name: string

  async run() {
    this.logger.info(this.name)
  }
}
