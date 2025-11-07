import logger from '@adonisjs/core/services/logger'

if (logger.isLevelEnabled('debug')) {
  const data = { heavy: 'payload' } // simulação de custo
  logger.debug(data, 'Debug message')
}

await logger.ifLevelEnabled('debug', async () => {
  const data = { expensive: 'calc' }
  logger.debug(data, 'Only computed when debug is enabled')
})
