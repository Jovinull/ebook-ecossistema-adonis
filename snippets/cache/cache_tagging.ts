import cache from '@adonisjs/cache/services/main'

await cache.getOrSet({
  key: 'foo',
  factory: async () => 'value',
  tags: ['tag-1', 'tag-2'],
})

await cache.deleteByTag({ tags: ['tag-1'] })
