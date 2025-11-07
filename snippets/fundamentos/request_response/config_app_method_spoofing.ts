// config/app.ts
import { defineConfig } from '@adonisjs/core/app'

export const http = defineConfig({
  allowMethodSpoofing: true,
})
