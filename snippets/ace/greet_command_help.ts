import { BaseCommand } from '@adonisjs/core/ace'

export default class GreetCommand extends BaseCommand {
  static commandName = 'greet'
  static description = 'Greet a user by name'

  static help = [
    'The greet command is used to greet a user by name',
    '',
    'Usage examples:',
    '{{ binaryName }} greet Felipe',
    '{{ binaryName }} greet --help',
  ]

  async run() {
    this.logger.info('Hello!')
  }
}
