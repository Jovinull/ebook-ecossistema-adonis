import { defineConfig } from '@adonisjs/shield'

const shieldConfig = defineConfig({
  csp: {
    enabled: true,
    directives: {
      defaultSrc: [`'self'`],
      scriptSrc: [`'self'`, 'https://cdnjs.cloudflare.com'],
      fontSrc: [`'self'`, 'https://fonts.googleapis.com'],
    },
    reportOnly: false,
  },
})

export default shieldConfig
