import logger from '@adonisjs/core/services/logger'

logger.trace({ config: 'x' }, 'using config')
logger.debug('user details: %o', { username: 'virk' })
logger.info('hello %s', 'world')
logger.warn('Unable to connect to database')

try {
  throw new Error('db offline')
} catch (error) {
  logger.error({ err: error }, 'Something went wrong')
  logger.fatal({ err: error }, 'Unrecoverable error')
}

// Merging object (bindings)
const user = { id: 1, username: 'virk' }
logger.info({ user }, 'Fetched user by id %s', user.id)
