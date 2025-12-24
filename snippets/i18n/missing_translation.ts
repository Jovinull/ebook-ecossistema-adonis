import i18nManager from '@adonisjs/i18n/services/main'

const i18n = i18nManager.locale('en')

i18n.t('messages.hero_title')
// translation missing: en, messages.hero_title

i18n.t('messages.hero_title', '')
// output: ''
