import { BaseCommand } from '@adonisjs/core/ace'

export default class TasksCommand extends BaseCommand {
  static commandName = 'ui:tasks'

  async run() {
    const tasks = this.ui.tasks()

    await tasks
      .add('clone repo', async () => {
        return 'Completed'
      })
      .add('update package file', async (task) => {
        return task.error('Unable to update package file')
      })
      .add('install dependencies', async () => {
        return 'Installed'
      })
      .run()
  }
}
