// config/logger.ts (escrevendo em arquivo)
import env from '#start/env'
import { defineConfig, targets } from '@adonisjs/core/logger'

export default defineConfig({
  default: 'app',
  loggers: {
    app: {
      enabled: true,
      name: env.get('APP_NAME'),
      level: env.get('LOG_LEVEL', 'info'),
      transport: {
        targets: targets()
          .push({
            target: 'pino/file',
            level: 'info',
            options: {
              destination: '/var/log/apps/adonisjs.log',
            },
          })
          .toArray(),
      },
    },
  },
})
