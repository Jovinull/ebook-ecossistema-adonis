import logger from '@adonisjs/core/services/logger'

// Com bindings fixos
const requestLogger = logger.child({ requestId: 'abc123' })
requestLogger.info('child log with request id')

// Child com nível diferente
const warnChild = logger.child({}, { level: 'warn' })
warnChild.debug('ignored') // nível abaixo
warnChild.warn('emitting warn')
