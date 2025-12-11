import Env from '@adonisjs/core/services/env'

export default Env.create({
  LIMITER_STORE: Env.schema.enum(['redis', 'database', 'memory'] as const),
})
