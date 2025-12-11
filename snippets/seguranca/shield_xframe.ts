import { defineConfig } from '@adonisjs/shield'

const shieldConfig = defineConfig({
  xFrame: {
    enabled: true,
    action: 'DENY', // ou 'SAMEORIGIN' / 'ALLOW-FROM'
  },
})

export default shieldConfig
