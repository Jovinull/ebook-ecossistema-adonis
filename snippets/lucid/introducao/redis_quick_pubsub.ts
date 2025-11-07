import redis from '@adonisjs/redis/services/main'

await redis.set('username', 'virk')
const name = await redis.get('username')
console.log('username:', name)

redis.subscribe('user:add', (message) => {
  console.log('user:add message:', message)
})
