// config/logger.ts (rotação com pino-roll)
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
            target: 'pino-roll',
            level: 'info',
            options: {
              file: '/var/log/apps/adonisjs.log',
              frequency: 'daily',
              mkdir: true,
            },
          })
          .toArray(),
      },
    },
  },
})
