import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'

export default class WatchCommand extends BaseCommand {
  static commandName = 'watch:memory'
  static description = 'Example long-running command'

  static options: CommandOptions = {
    staysAlive: true,
  }

  async run() {
    this.logger.info('Watching... (press Ctrl+C to stop)')
    // Simulação de processo que fica ativo
    setInterval(() => {
      this.logger.info(`Heartbeat: ${new Date().toISOString()}`)
    }, 5000)
  }
}
