import { Secret } from '@adonisjs/core/helpers'
import logger from '@adonisjs/core/services/logger'

const password = new Secret('super-secret')
logger.info({ password }, 'user signup')
