import i18nManager from '@adonisjs/i18n/services/main'

i18nManager.locale('en').formatNumber(123456.789, {
  maximumSignificantDigits: 3,
})
