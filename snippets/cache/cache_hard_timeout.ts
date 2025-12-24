import cache from '@adonisjs/cache/services/main'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

cache.getOrSet({
  key: 'slow-api',
  factory: async () => {
    await sleep(5000)
    return 'slow-api-response'
  },
  ttl: '1h',
  hardTimeout: '200ms',
})
