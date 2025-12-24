import { BaseCommand } from '@adonisjs/core/ace'

async function runSomeOperation() {
  throw new Error('Boom')
}

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  async run() {
    try {
      await runSomeOperation()
      this.logger.success('Operation completed')
    } catch (error: any) {
      this.logger.error(error.message)
      this.error = error
      this.exitCode = 1
    }
  }
}
