// config/app.ts
import { defineConfig } from '@adonisjs/core/app'
import proxyAddr from 'proxy-addr'

// Exemplos:
export const http = defineConfig({
  trustProxy: proxyAddr.compile(['127.0.0.1/8', '::1/128']),
})

// Somente loopback (nginx local):
export const httpLoopback = defineConfig({
  trustProxy: proxyAddr.compile('loopback'),
})

// Sempre confiar (ex.: só via load balancer):
export const httpAlwaysTrust = defineConfig({
  trustProxy: () => true,
})
