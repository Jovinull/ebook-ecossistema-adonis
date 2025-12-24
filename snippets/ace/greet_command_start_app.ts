import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'
  static description = 'Command that needs app bootstrapping'

  static options: CommandOptions = {
    startApp: true,
  }

  async run() {
    /**
     * Aqui você já pode depender de providers/config/IoC,
     * Lucid, etc (conforme seu projeto).
     */
    this.logger.success('App started. Ready to go.')
  }
}
