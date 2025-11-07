import router from '@adonisjs/core/services/router'

router.get('/', ({ request }) => {
  const headers = request.headers()
  const id1 = request.header('x-request-id')
  const id2 = request.header('X-REQUEST-ID') // case-insensitive
  return { headers, id1, id2 }
})
