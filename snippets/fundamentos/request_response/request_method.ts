import router from '@adonisjs/core/services/router'

router.patch('posts', ({ request }) => {
  const matched = request.method() // usado no match da rota (pode ser spoofado)
  const intended = request.intended() // método original
  return { matched, intended }
})
