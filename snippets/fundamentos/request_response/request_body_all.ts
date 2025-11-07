import router from '@adonisjs/core/services/router'

router.post('/', ({ request }) => {
  const body = request.body()
  const all = request.all() // body + query
  return { body, all }
})
