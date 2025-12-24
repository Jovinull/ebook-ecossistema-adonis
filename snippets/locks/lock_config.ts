import env from '#start/env'
import { defineConfig, stores } from '@adonisjs/lock'

const lockConfig = defineConfig({
  default: env.get('LOCK_STORE'),
  stores: {
    redis: stores.redis({}),
    database: stores.database({ tableName: 'locks' }),
    memory: stores.memory(),
  },
})

export default lockConfig
