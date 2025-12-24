import { BaseCommand, args } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'
  static description = 'Greet a user by name'

  @args.string()
  declare name: string

  async run() {
    this.logger.success(`Hello, ${this.name}!`)
  }
}
