// config/app.ts
import { defineConfig } from '@adonisjs/core/app'

export const http = defineConfig({
  qs: {
    parse: {
      // opções do pacote "qs" (ex.: depth, allowDots, etc.)
    },
  },
})
