import { BaseCommand } from '@adonisjs/core/ace'
import { CommandOptions } from '@adonisjs/core/types/ace'
import EventEmitter from 'node:events'

function createFakeConnection() {
  const conn = new EventEmitter()
  setTimeout(() => conn.emit('error', new Error('Connection lost')), 3000)
  return conn
}

export default class WatchCommand extends BaseCommand {
  static commandName = 'watch:conn'
  static description = 'Terminates when connection fails'

  static options: CommandOptions = {
    staysAlive: true,
  }

  async run() {
    const conn = createFakeConnection()

    conn.on('error', (error) => {
      this.logger.error(error)
      this.terminate()
    })
  }
}
