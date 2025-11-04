import router from '@adonisjs/core/services/router'

// Global: todo 'id' deve ser UUID, a menos que sobrescreva
router.where('id', router.matchers.uuid())

router
  .get('/posts/:id', ({ params }) => {
    return `UUID: ${params.id}`
  })
  // sobrescrevendo só nesta rota
  .where('id', router.matchers.number())

router.get('/articles/:slug', ({ params }) => {
  // slug conforme regex de slug
  return `slug: ${params.slug}`
}).where('slug', router.matchers.slug())
