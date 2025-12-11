import { defineConfig } from '@adonisjs/cors'

const corsConfig = defineConfig({
  enabled: true,
  origin: ['https://painel.minhaapp.com'],
  methods: ['GET', 'POST'],
  headers: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600,
})

export default corsConfig
