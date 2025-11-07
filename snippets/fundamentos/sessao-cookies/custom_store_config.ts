// config/session.ts (trecho)
import { defineConfig } from '@adonisjs/session'
import { mongoDbStore } from 'my-custom-package'

export default defineConfig({
  stores: {
    mongodb: mongoDbStore({
      // opções da sua store
    }),
  },
})
