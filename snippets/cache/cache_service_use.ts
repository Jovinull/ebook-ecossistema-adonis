import cache from '@adonisjs/cache/services/main'

cache.put({ key: 'username', value: 'jul', ttl: '1h' })

cache.use('dynamodb').put({ key: 'username', value: 'jul', ttl: '1h' })
