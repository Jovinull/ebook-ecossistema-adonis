import i18nManager from '@adonisjs/i18n/services/main'

const en = i18nManager.locale('en')
const fr = i18nManager.locale('fr')

en.t('messages.greeting')
fr.t('messages.greeting')
