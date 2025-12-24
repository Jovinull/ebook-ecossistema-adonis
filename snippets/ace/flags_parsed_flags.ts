import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:parsed'

  @flags.boolean()
  declare resource?: boolean

  @flags.boolean()
  declare singular?: boolean

  async run() {
    this.logger.info(JSON.stringify(this.parsed.flags))
    this.logger.info(JSON.stringify(this.parsed.unknownFlags))
  }
}
