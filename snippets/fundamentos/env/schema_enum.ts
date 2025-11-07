import Env from '@adonisjs/core/env'

enum NODE {
  development = 'development',
  production = 'production',
}

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV_STRICT: Env.schema.enum(['development', 'production'] as const),
  NODE_ENV_TSENUM: Env.schema.enum(NODE),
})
