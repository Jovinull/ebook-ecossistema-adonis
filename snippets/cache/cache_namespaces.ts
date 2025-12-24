import cache from '@adonisjs/cache/services/main'

const users = cache.namespace('users')

await users.set({ key: '32', value: { name: 'foo' } })
await users.set({ key: '33', value: { name: 'bar' } })

await users.clear()
