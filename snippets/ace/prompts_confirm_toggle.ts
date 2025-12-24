import { BaseCommand } from '@adonisjs/core/ace'

export default class PromptCommand extends BaseCommand {
  static commandName = 'prompt:confirm'

  async run() {
    const deleteFiles = await this.prompt.confirm('Want to delete all files?')
    this.logger.info(`confirm: ${deleteFiles}`)

    const deleteFiles2 = await this.prompt.toggle('Want to delete all files?', ['Yup', 'Nope'])
    this.logger.info(`toggle: ${deleteFiles2}`)
  }
}
