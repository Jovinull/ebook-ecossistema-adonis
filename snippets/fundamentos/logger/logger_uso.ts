// Uso global
import logger from '@adonisjs/core/services/logger'

// Log simples no stdout
logger.info('this is an info message')

try {
  throw new Error('boom')
} catch (error) {
  logger.error({ err: error }, 'Something went wrong')
}

// Uso no contexto HTTP (request-aware)
import User from '#models/user'
import router from '@adonisjs/core/services/router'

router.get('/users/:id', async ({ logger, params }) => {
  logger.info('Fetching user by id %s', params.id)
  const user = await User.find(params.id)
  return user
})
