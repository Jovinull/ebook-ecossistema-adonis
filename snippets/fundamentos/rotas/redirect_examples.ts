import router from '@adonisjs/core/services/router'

// para uma rota/path
router.on('/posts').redirect('/articles')
// para uma URL
router.on('/posts').redirectToPath('https://medium.com/my-blog')

// encaminhando params
router.on('/posts/:id').redirect('/articles/:id')

// params explícitos (ignora os da request)
router.on('/posts/:id').redirect('/articles/:id', { id: 1 })

// com query string
router.on('/posts').redirect('/articles', {
  qs: { limit: 20, page: 1 },
})
