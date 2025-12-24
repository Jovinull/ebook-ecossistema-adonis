import { BaseCommand } from '@adonisjs/core/ace'

export default class ColorsCommand extends BaseCommand {
  static commandName = 'ui:colors'

  async run() {
    this.logger.info(this.colors.red('[ERROR]'))
    this.logger.info(this.colors.bgGreen().white(' CREATED '))
    this.logger.info(`URL: ${this.colors.cyan('http://localhost:3333')}`)
  }
}
