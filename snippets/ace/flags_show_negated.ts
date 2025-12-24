import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:negated'

  @flags.boolean({
    showNegatedVariantInHelp: true,
  })
  declare resource?: boolean

  async run() {
    this.logger.info(String(this.resource))
  }
}
