import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:number'

  @flags.number()
  declare score?: number

  async run() {
    this.logger.info(String(this.score))
  }
}
