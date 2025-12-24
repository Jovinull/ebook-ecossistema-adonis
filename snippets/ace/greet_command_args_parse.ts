import { BaseCommand, args } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  @args.string({
    argumentName: 'user-name',
    description: 'Name of the user',
    parse(value) {
      return value ? value.toUpperCase() : value
    },
  })
  declare name: string

  async run() {
    this.logger.info(this.name)
  }
}
