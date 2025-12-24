import { BaseCommand } from '@adonisjs/core/ace'

export default class PromptCommand extends BaseCommand {
  static commandName = 'prompt:secure'

  async run() {
    const password = await this.prompt.secure('Enter account password', {
      validate(value) {
        return value.length < 6 ? 'Password must be 6 characters long' : true
      },
    })

    this.logger.info(`Length: ${password.length}`)
  }
}
