// config/bodyparser.ts
import { defineConfig } from '@adonisjs/core/bodyparser'

export default defineConfig({
  allowedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],

  form: {
    encoding: 'utf-8',
    limit: '1mb',
    // opções do "qs" para urlencoded
    queryString: {
      // allowDots: true,
      // allowSparse: true,
    },
    convertEmptyStringsToNull: true,
    types: ['application/x-www-form-urlencoded'],
  },

  json: {
    encoding: 'utf-8',
    limit: '1mb',
    strict: true,
    types: [
      'application/json',
      'application/json-patch+json',
      'application/vnd.api+json',
      'application/csp-report',
    ],
    convertEmptyStringsToNull: true,
  },

  multipart: {
    autoProcess: true, // mover para TMP automaticamente
    processManually: [], // ou desative por rota/padrão
    encoding: 'utf-8',
    fieldsLimit: '2mb',
    limit: '20mb',
    types: ['multipart/form-data'],
    convertEmptyStringsToNull: true,
    // autoProcess: ['/uploads', '/post/:id'], // exemplo por padrão de rota
  },

  raw: {
    // parser de texto puro, se necessário
  },
})
