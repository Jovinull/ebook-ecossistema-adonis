import router from '@adonisjs/core/services/router'

router.get('/posts', ({ response }) => {
  return response.redirect().toPath('/articles')
})

router.get('/articles/:id', () => {}).as('articles.show')

router.get('/posts/:id', ({ response, params }) => {
  return response.redirect().toRoute('articles.show', { id: params.id })
})

router.get('/filters', ({ response }) => {
  return response.redirect().withQs({ page: 1, limit: 20 }).toRoute('articles.index')
})

// encaminhar a query string atual:
router.get('/forward', ({ response }) => {
  return response.redirect().withQs().toRoute('articles.index')
})

router.get('/back', ({ response }) => {
  return response.redirect().withQs().back()
})

router.get('/moved', ({ response, params }) => {
  return response.redirect().status(301).toRoute('articles.show', { id: params.id })
})
