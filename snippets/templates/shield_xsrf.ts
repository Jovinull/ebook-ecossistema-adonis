import { defineConfig } from '@adonisjs/shield'

const shieldConfig = defineConfig({
  csrf: {
    enabled: true,
    enableXsrfCookie: true,
    // ...
  },
})

export default shieldConfig
