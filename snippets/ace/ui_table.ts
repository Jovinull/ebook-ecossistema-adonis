import { BaseCommand } from '@adonisjs/core/ace'

export default class TableCommand extends BaseCommand {
  static commandName = 'ui:table'

  async run() {
    const table = this.ui.table()

    table
      .head(['Migration', 'Duration', 'Status'])
      .row(['1590591892626_tenants.ts', '2ms', 'DONE'])
      .row(['1590595949171_entities.ts', '2ms', 'DONE'])
      .render()
  }
}
