import i18nManager from '@adonisjs/i18n/services/main'
import { DateTime } from 'luxon'

i18nManager.locale('en').formatDate(new Date(), { dateStyle: 'long' })
i18nManager.locale('en').formatDate(DateTime.local(), { dateStyle: 'long' })
