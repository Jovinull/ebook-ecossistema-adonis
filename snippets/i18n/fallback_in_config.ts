import { defineConfig } from '@adonisjs/i18n'

export default defineConfig({
  fallback: (identifier, locale) => {
    return ''
  },
})
