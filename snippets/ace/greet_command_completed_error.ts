import { BaseCommand } from '@adonisjs/core/ace'

async function runSomeOperation() {
  throw new Error('Boom')
}

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'

  async run() {
    await runSomeOperation()
  }

  async completed() {
    if (this.error) {
      this.logger.error(this.error.message)

      /**
       * Retornando true, você sinaliza que o erro foi tratado.
       */
      return true
    }
  }
}
