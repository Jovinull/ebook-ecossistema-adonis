import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class MakeControllerCommand extends BaseCommand {
  static commandName = 'make:controller:demo'

  @flags.boolean()
  declare resource?: boolean

  @flags.boolean()
  declare singular?: boolean

  async run() {
    this.logger.info(`resource=${this.resource} singular=${this.singular}`)
  }
}
