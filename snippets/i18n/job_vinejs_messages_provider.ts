import { createJobValidator } from '#validators/jobs'
import i18nManager from '@adonisjs/i18n/services/main'

const i18n = i18nManager.locale('fr')

await createJobValidator.validate({}, {
  messagesProvider: i18n.createMessagesProvider(),
})
