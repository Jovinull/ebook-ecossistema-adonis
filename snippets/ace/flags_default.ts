import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:defaults'

  @flags.boolean({ default: true })
  declare startServer: boolean

  @flags.string({ default: 'sqlite' })
  declare connection: string

  async run() {
    this.logger.info(`startServer=${this.startServer} connection=${this.connection}`)
  }
}
