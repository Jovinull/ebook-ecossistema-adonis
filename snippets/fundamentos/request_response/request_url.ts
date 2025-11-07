import router from '@adonisjs/core/services/router'

router.get('/users', ({ request }) => {
  const withoutQs = request.url()
  const withQs = request.url(true)
  const complete = request.completeUrl()
  const completeWithQs = request.completeUrl(true)
  return { withoutQs, withQs, complete, completeWithQs }
})
