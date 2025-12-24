import locks from '@adonisjs/lock/services/main'

export default class OrderController {
  async process({ request }) {
    const orderId = request.input('order_id')

    const lock = locks.createLock(`order.processing.${orderId}`)
    const acquired = await lock.acquireImmediately()

    if (!acquired) {
      return 'Order is already being processed'
    }

    try {
      // processOrder()
      return 'Order processed successfully'
    } finally {
      await lock.release()
    }
  }
}
