import { BaseCommand } from '@adonisjs/core/ace'

export default class StickerCommand extends BaseCommand {
  static commandName = 'ui:sticker'

  async run() {
    const sticker = this.ui.sticker()

    sticker
      .add('Started HTTP server')
      .add('')
      .add(`Local address:   ${this.colors.cyan('http://localhost:3333')}`)
      .add(`Network address: ${this.colors.cyan('http://192.168.1.2:3333')}`)
      .render()
  }
}
