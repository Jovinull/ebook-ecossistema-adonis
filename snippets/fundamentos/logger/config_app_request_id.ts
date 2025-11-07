// config/app.ts (trecho relevante)
import { defineConfig } from '@adonisjs/core/app'

export const http = defineConfig({
  generateRequestId: true,
  // ...
})
