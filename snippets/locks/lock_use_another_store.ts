import locks from '@adonisjs/lock/services/main'

const lock = locks.use('redis').createLock('order.processing.1')
