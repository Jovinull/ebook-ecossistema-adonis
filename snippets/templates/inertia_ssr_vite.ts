import inertia from '@adonisjs/inertia/client'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    inertia({
      ssr: {
        enabled: true,
        entrypoint: 'inertia/app/ssr.ts',
      },
    }),
  ],
})
