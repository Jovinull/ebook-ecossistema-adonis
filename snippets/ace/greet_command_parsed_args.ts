import { BaseCommand, args } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  @args.string()
  declare name: string

  async run() {
    this.logger.info(JSON.stringify(this.parsed.args))
  }
}
