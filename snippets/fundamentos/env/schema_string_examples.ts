import Env from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  // string obrigatória
  APP_KEY: Env.schema.string(),

  // opcional
  OPTIONAL_KEY: Env.schema.string.optional(),

  // opcional condicionado
  OPTIONAL_IN_PROD: Env.schema.string.optionalWhen(
    () => process.env.NODE_ENV === 'production'
  ),

  // formatos
  HOST: Env.schema.string({ format: 'host' }),
  S3_ENDPOINT_STRICT: Env.schema.string({ format: 'url' }),
  S3_ENDPOINT_NO_PROTO: Env.schema.string({ format: 'url', protocol: false }),
  S3_ENDPOINT_NO_TLD: Env.schema.string({ format: 'url', tld: false }),
  SENDER_EMAIL: Env.schema.string({ format: 'email' }),
})
