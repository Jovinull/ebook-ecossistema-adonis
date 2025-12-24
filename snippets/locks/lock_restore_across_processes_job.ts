import locks from '@adonisjs/lock/services/main'

export class ProcessOrder {
  async handle({ lock }) {
    const handle = locks.restoreLock(lock)

    // await processOrder()

    await handle.release()
  }
}
