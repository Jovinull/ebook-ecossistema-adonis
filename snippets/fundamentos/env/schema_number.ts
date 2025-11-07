import Env from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  PORT: Env.schema.number(),
  PORT_OPT: Env.schema.number.optional(),
  PORT_OPT_PROD: Env.schema.number.optionalWhen(
    () => process.env.NODE_ENV === 'production'
  ),
})
