import { BaseCommand } from '@adonisjs/core/ace'

const sleep = () => new Promise<void>((resolve) => setTimeout(resolve, 50))

export default class TasksCommand extends BaseCommand {
  static commandName = 'ui:tasks:progress'

  async run() {
    const tasks = this.ui.tasks()

    await tasks
      .add('download assets', async (task) => {
        for (let i = 0; i <= 100; i += 2) {
          await sleep()
          task.update(`Downloaded ${i}%`)
        }
        return 'Completed'
      })
      .run()
  }
}
