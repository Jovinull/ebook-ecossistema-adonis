import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.ts',
  },
})
