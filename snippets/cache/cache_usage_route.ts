import User from '#models/user'
import cache from '@adonisjs/cache/services/main'
import router from '@adonisjs/core/services/router'

router.get('/user/:id', async ({ params }) => {
  return cache.getOrSet({
    key: `user:${params.id}`,
    factory: async () => {
      const user = await User.find(params.id)
      return user?.toJSON()
    },
    ttl: '5m',
  })
})
