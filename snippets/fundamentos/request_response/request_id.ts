// config/app.ts
import { defineConfig } from '@adonisjs/core/app'

export const http = defineConfig({
  generateRequestId: true,
})

// Em uma rota
import router from '@adonisjs/core/services/router'

router.get('/', ({ request, logger }) => {
  const id = request.id()
  logger.info('hello world') // incluirá request_id automaticamente
  return { id }
})
