import SendVerificationEmail from '#listeners/send_verification_email'
import emitter from '@adonisjs/core/services/emitter'

emitter.on('user:registered', [SendVerificationEmail, 'handle'])
