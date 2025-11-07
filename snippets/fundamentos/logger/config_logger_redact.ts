// config/logger.ts (redact)
import env from '#start/env'
import { defineConfig } from '@adonisjs/core/logger'

export default defineConfig({
  default: 'app',
  loggers: {
    app: {
      enabled: true,
      name: env.get('APP_NAME'),
      level: env.get('LOG_LEVEL', 'info'),
      redact: {
        paths: ['password', '*.password'],
        // censor: '[PRIVATE]' // opcional: placeholder custom
        // remove: true        // opcional: remover a chave
      },
    },
  },
})
