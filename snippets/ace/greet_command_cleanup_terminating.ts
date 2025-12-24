import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'

export default class WatchCommand extends BaseCommand {
  static commandName = 'watch:cleanup'
  static description = 'Cleanup example'

  static options: CommandOptions = {
    staysAlive: true,
  }

  prepare() {
    this.app.terminating(() => {
      // perform cleanup (close connections, flush buffers, etc.)
      this.logger.warning('App is terminating. Cleaning up...')
    })
  }

  async run() {
    this.logger.info('Running...')
  }
}
