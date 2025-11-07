import Env from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  PORT: (name, value) => {
    if (!value) throw new Error(`Value for ${name} is required`)
    if (isNaN(Number(value))) throw new Error(`Value for ${name} must be a valid number`)
    return Number(value)
  },
})
