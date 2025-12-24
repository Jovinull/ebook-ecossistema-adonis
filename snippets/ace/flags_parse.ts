import { BaseCommand, flags } from '@adonisjs/core/ace'

const connections: Record<string, string> = {
  sqlite: 'sqlite',
  pg: 'postgres',
  mysql: 'mysql',
}

export default class DemoCommand extends BaseCommand {
  static commandName = 'demo:parseflag'

  @flags.string({
    parse(value) {
      return value ? connections[value] : value
    },
  })
  declare connection?: string

  async run() {
    this.logger.info(String(this.connection))
  }
}
