import Env from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  CACHE_VIEWS: Env.schema.boolean(),
  CACHE_VIEWS_OPT: Env.schema.boolean.optional(),
  CACHE_VIEWS_OPT_PROD: Env.schema.boolean.optionalWhen(
    () => process.env.NODE_ENV === 'production'
  ),
})
