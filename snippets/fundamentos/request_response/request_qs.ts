import router from '@adonisjs/core/services/router'

router.get('posts', ({ request }) => {
  // URL: /posts?sort_by=id&direction=desc
  const qs = request.qs() // { sort_by: 'id', direction: 'desc' }
  return qs
})
