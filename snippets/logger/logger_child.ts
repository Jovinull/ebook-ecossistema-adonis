import logger from '@adonisjs/core/services/logger'

const requestLogger = logger.child({ requestId: 'abc-123' })
requestLogger.info('hello')
