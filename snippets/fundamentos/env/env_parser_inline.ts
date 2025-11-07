// Exemplo didático usando EnvParser diretamente
import { EnvParser } from '@adonisjs/core/env'

EnvParser.defineIdentifier('base64', (value) => {
  return Buffer.from(value, 'base64').toString()
})

const parser = new EnvParser(`
  APP_KEY=base64:U7dbSKkdb8wjVFOTq2osaDVz4djuA7BRLdoCUJEWxak=
`)

console.log(await parser.parse())
// => { APP_KEY: 'decodificado...' }
