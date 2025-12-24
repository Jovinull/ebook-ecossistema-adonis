import locks from '@adonisjs/lock/services/main'

export class OrderController {
  async process({ request }) {
    const orderId = request.input('order_id')

    const lock = locks.createLock(`order.processing.${orderId}`)
    await lock.acquire()

    // queue.dispatch(..., { lock: lock.serialize() })
  }
}
