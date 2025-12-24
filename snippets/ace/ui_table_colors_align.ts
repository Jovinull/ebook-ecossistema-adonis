import { BaseCommand } from '@adonisjs/core/ace'

export default class TableCommand extends BaseCommand {
  static commandName = 'ui:table:align'

  async run() {
    const table = this.ui.table()

    table.head([
      'Migration',
      'Batch',
      { content: 'Status', hAlign: 'right' },
    ])

    table.row([
      '1590595949171_entities.ts',
      '2',
      { content: this.colors.green('DONE'), hAlign: 'right' },
    ])

    table.render()
  }
}
