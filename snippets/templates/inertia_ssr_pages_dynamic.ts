import type { HttpContext } from '@adonisjs/core/http'
import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  ssr: {
    enabled: true,
    pages: (ctx: HttpContext, page: string) => !page.startsWith('admin'),
  },
})
