// config/app.ts
import { defineConfig } from '@adonisjs/core/app'

export const http = defineConfig({
  getIp(request) {
    const real = request.header('X-Real-Ip')
    if (real) return real
    return request.ips()[0]
  },
})
