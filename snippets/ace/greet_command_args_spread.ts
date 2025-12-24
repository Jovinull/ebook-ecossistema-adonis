import { BaseCommand, args } from '@adonisjs/core/ace'

export default class GreetManyCommand extends BaseCommand {
  static commandName = 'greet:many'
  static description = 'Greet multiple users'

  @args.spread()
  declare names: string[]

  async run() {
    this.logger.info(`Hello, ${this.names.join(', ')}!`)
  }
}
