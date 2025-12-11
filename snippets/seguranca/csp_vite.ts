import { defineConfig } from '@adonisjs/shield'

const shieldConfig = defineConfig({
  csp: {
    directives: {
      defaultSrc: [`'self'`, '@viteDevUrl'],
      connectSrc: ['@viteHmrUrl'],
    },
  },
})

export default shieldConfig
