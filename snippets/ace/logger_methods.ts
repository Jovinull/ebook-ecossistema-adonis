import { BaseCommand } from '@adonisjs/core/ace'

export default class LoggerCommand extends BaseCommand {
  static commandName = 'ui:logger'

  async run() {
    this.logger.debug('Something just happened')
    this.logger.info('This is an info message')
    this.logger.success('Account created')
    this.logger.warning('Running out of disk space')

    // Writes to stderr
    this.logger.error(new Error('Unable to write. Disk full'))
    this.logger.fatal(new Error('Unable to write. Disk full'))
  }
}
