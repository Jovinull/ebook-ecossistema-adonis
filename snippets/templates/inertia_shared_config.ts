import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  sharedData: {
    appName: 'My App',
    user: (ctx) => ctx.auth?.user,
  },
})
