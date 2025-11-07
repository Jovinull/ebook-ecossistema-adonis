// config/logger.ts (exemplo com dois loggers)
import env from '#start/env'
import { defineConfig } from '@adonisjs/core/logger'

export default defineConfig({
  default: 'app',
  loggers: {
    app: {
      enabled: true,
      name: env.get('APP_NAME'),
      level: env.get('LOG_LEVEL', 'info'),
    },
    payments: {
      enabled: true,
      name: 'payments',
      level: env.get('LOG_LEVEL', 'info'),
    },
  },
})

// Em runtime
import logger from '@adonisjs/core/services/logger'

logger.use('payments').info('payment created')
logger.use('app').debug('debug from default logger')
// Sem argumento obtém o default
logger.use().warn('default again')
