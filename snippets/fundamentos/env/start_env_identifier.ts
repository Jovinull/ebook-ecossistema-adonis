// start/env.ts (definindo identificador base64:)
import Env from '@adonisjs/core/env'

Env.defineIdentifier('base64', (value) => {
  return Buffer.from(value, 'base64').toString()
})

const APP_ROOT = new URL('../', import.meta.url)

export default await Env.create(APP_ROOT, {
  APP_KEY: Env.schema.string(),
})
