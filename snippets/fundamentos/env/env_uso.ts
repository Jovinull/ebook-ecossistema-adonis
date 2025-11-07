// Comparando leitura direta e via módulo env
// — direta:
process.env.NODE_ENV
process.env.HOST
process.env.PORT

// — via módulo env (preferível):
import env from '#start/env'

const nodeEnv = env.get('NODE_ENV') // tipado pelo schema
const host = env.get('HOST') // string validada
const port = env.get('PORT', 3333) // default se ausente
