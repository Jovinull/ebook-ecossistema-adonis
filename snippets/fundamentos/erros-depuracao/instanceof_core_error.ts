import { errors } from '@adonisjs/core'
import router from '@adonisjs/core/services/router'

try {
  router.builder().make('articles.index')
} catch (error: unknown) {
  if (error instanceof errors.E_CANNOT_LOOKUP_ROUTE) {
    // tratamento específico
  }
}
