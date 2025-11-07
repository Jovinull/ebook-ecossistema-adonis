// config/session.ts
import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { defineConfig, stores } from '@adonisjs/session'

export default defineConfig({
  enabled: true,
  cookieName: 'adonis-session',
  clearWithBrowser: false,
  age: '2h',
  cookie: {
    path: '/',
    httpOnly: true,
    secure: app.inProduction,
    sameSite: 'lax',
  },
  store: env.get('SESSION_DRIVER'),
  stores: {
    cookie: stores.cookie(),
    file: stores.file({ location: app.tmpPath('sessions') }),
    redis: stores.redis({ connection: 'main' }),
    dynamodb: stores.dynamodb({
      // clientConfig OU client
      clientConfig: {
        // region: 'us-east-1',
        // endpoint: '',
        // credentials: { accessKeyId: '', secretAccessKey: '' },
      },
      // tableName: 'Session',
      // keyAttribute: 'key',
    }),
  },
})
