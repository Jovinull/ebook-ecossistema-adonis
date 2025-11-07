import { Secret } from '@adonisjs/core/helpers'
import logger from '@adonisjs/core/services/logger'

function simulateSignup(request: any) {
  const username = request.input('username')
  const password = request.input('password')

  // Redact via config (paths)
  logger.info({ username, password }, 'user signup (redact by path)')

  // Alternativa: Secret
  const secretPwd = new Secret(password)
  logger.info({ username, password: secretPwd }, 'user signup (Secret)')
}
