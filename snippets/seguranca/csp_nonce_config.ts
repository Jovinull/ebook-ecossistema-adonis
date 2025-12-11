import { defineConfig } from '@adonisjs/shield'

const shieldConfig = defineConfig({
  csp: {
    directives: {
      defaultSrc: [`'self'`, '@nonce'],
    },
  },
})

export default shieldConfig
