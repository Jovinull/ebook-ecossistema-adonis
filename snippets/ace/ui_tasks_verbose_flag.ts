import { BaseCommand, flags } from '@adonisjs/core/ace'

export default class TasksCommand extends BaseCommand {
  static commandName = 'ui:tasks:verbose'

  @flags.boolean()
  declare verbose?: boolean

  async run() {
    const tasks = this.ui.tasks({
      verbose: Boolean(this.verbose),
    })

    await tasks
      .add('step 1', async (task) => {
        task.update('running...')
        return 'ok'
      })
      .add('step 2', async (task) => {
        task.update('still running...')
        return 'ok'
      })
      .run()
  }
}
