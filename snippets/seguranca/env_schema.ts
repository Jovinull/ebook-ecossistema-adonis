import Env from '@adonisjs/core/services/env'

export default Env.create({
  APP_KEY: Env.schema.string(),
  NODE_ENV: Env.schema.enum(['development', 'test', 'production'] as const),
  DB_HOST: Env.schema.string(),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  LIMITER_STORE: Env.schema.enum(['redis', 'database', 'memory'] as const),
})
