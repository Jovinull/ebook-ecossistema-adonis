import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:string'

  @flags.string()
  declare model?: string

  async run() {
    this.logger.info(this.model ?? '(no model)')
  }
}
