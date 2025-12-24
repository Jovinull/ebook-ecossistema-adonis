import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'
  static description = 'Accept unknown flags (useful for pass-through)'

  static options: CommandOptions = {
    allowUnknownFlags: true,
  }

  async run() {
    this.logger.info('Unknown flags will not crash this command.')
    this.logger.info(JSON.stringify(this.parsed.unknownFlags))
  }
}
