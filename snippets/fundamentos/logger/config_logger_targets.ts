// config/logger.ts (targets condicionais)
import env from '#start/env'
import { defineConfig, targets } from '@adonisjs/core/logger'
import app from '@adonisjs/core/services/app'

export default defineConfig({
  default: 'app',
  loggers: {
    app: {
      enabled: true,
      name: env.get('APP_NAME'),
      level: env.get('LOG_LEVEL', 'info'),
      transport: {
        targets: targets()
          .pushIf(app.inDev, { target: 'pino-pretty', level: 'info', options: {} })
          .pushIf(app.inProduction, {
            target: 'pino/file',
            level: 'info',
            options: { destination: 1 },
          })
          .toArray(),
      },
    },
  },
})
