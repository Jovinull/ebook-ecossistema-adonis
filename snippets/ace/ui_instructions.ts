import { BaseCommand } from '@adonisjs/core/ace'

export default class InstructionsCommand extends BaseCommand {
  static commandName = 'ui:instructions'

  async run() {
    const instructions = this.ui.instructions()

    instructions
      .add('Run migrations: node ace migration:run')
      .add('Seed database: node ace db:seed')
      .add('Start server: node ace serve --watch')
      .render()
  }
}
