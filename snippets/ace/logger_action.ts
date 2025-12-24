import { BaseCommand } from '@adonisjs/core/ace'

async function performTasks() {
  await new Promise((r) => setTimeout(r, 300))
}

export default class LoggerCommand extends BaseCommand {
  static commandName = 'ui:action'

  async run() {
    const action = this.logger.action('creating config/auth.ts')

    try {
      await performTasks()
      action.displayDuration().succeeded()
    } catch (error: any) {
      action.failed(error)
    }
  }
}
