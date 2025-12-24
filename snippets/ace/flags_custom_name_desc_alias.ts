import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:flagmeta'

  @flags.boolean({
    flagName: 'server',
    description: 'Starts the application server',
    alias: ['s'],
  })
  declare startServer?: boolean

  async run() {
    this.logger.info(String(this.startServer))
  }
}
