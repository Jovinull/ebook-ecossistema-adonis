import type { HttpContext } from '@adonisjs/core/http'
import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  rootView: ({ request }: HttpContext) => {
    if (request.url().startsWith('/admin')) {
      return 'admin_root'
    }

    return 'app_root'
  },
})
