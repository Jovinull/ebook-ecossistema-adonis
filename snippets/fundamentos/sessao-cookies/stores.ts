// config/session.ts (apenas foco em stores)
import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { defineConfig, stores } from '@adonisjs/session'

export default defineConfig({
  store: env.get('SESSION_DRIVER'),
  stores: {
    cookie: stores.cookie(),
    file: stores.file({ location: app.tmpPath('sessions') }),
    redis: stores.redis({ connection: 'main' }),
    dynamodb: stores.dynamodb({ clientConfig: {} }),
  },
})
