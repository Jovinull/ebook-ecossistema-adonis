import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:array'

  @flags.array()
  declare groups?: string[]

  async run() {
    this.logger.info(JSON.stringify(this.groups ?? []))
  }
}
