import { BaseCommand } from '@adonisjs/core/ace'

export default class PromptCommand extends BaseCommand {
  static commandName = 'prompt:ask'

  async run() {
    const modelName = await this.prompt.ask('Enter the model name', {
      default: 'User',
      validate(value) {
        return value.length > 0 ? true : 'Model name is required'
      },
      result(value) {
        return value.trim()
      },
    })

    this.logger.success(`Model: ${modelName}`)
  }
}
