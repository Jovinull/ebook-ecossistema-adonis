import logger from '@adonisjs/core/services/logger'

logger.info('this is an info message')
logger.error({ err: new Error('boom') }, 'Something went wrong')
