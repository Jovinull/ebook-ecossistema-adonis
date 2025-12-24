import logger from '@adonisjs/core/services/logger'

if (logger.isLevelEnabled('debug')) {
  const expensive = { computed: true }
  logger.debug(expensive, 'Debug payload')
}
