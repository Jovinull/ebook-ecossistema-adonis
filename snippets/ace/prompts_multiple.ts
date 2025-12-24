import { BaseCommand } from '@adonisjs/core/ace'

export default class PromptCommand extends BaseCommand {
  static commandName = 'prompt:multiple'

  async run() {
    const drivers = await this.prompt.multiple('Select database drivers', [
      { name: 'sqlite', message: 'SQLite' },
      { name: 'mysql', message: 'MySQL' },
      { name: 'pg', message: 'PostgreSQL' },
    ])

    this.logger.info(JSON.stringify(drivers))
  }
}
