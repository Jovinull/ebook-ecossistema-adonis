// start/env.ts (trecho relevante)
import Env from '@adonisjs/core/services/env'

export default await Env.create(new URL('../', import.meta.url), {
  SESSION_DRIVER: Env.schema.enum(['cookie', 'redis', 'dynamodb', 'memory'] as const),
})
