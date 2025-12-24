import { BaseCommand } from '@adonisjs/core/ace'

export default class PromptCommand extends BaseCommand {
  static commandName = 'prompt:choice'

  async run() {
    const pm = await this.prompt.choice('Select package manager', ['npm', 'yarn', 'pnpm'])
    this.logger.success(`Selected: ${pm}`)

    const db = await this.prompt.choice('Select database driver', [
      { name: 'sqlite', message: 'SQLite' },
      { name: 'mysql', message: 'MySQL' },
      { name: 'pg', message: 'PostgreSQL' },
    ])

    this.logger.success(`DB: ${db}`)
  }
}
