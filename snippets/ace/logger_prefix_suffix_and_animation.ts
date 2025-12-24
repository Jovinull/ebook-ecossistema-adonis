import { BaseCommand } from '@adonisjs/core/ace'

export default class LoggerCommand extends BaseCommand {
  static commandName = 'ui:logger:await'

  async run() {
    this.logger.info('installing packages', { suffix: 'npm i --production' })
    this.logger.info('installing packages', { prefix: process.pid })

    const animation = this.logger.await('installing packages', { suffix: 'npm i' })
    animation.start()

    // Update the message
    setTimeout(() => {
      animation.update('unpacking packages', { suffix: undefined })
    }, 800)

    // Stop animation
    setTimeout(() => {
      animation.stop()
      this.logger.success('Done')
    }, 1500)
  }
}
