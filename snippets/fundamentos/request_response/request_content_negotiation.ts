import router from '@adonisjs/core/services/router'

router.get('posts', ({ request, view }) => {
  const posts = [{ title: 'Adonis 101' }]

  const accepted = request.types()
  const best = request.accepts(['html', 'json'])

  switch (best) {
    case 'html':
      return view.render('posts/index', { posts })
    case 'json':
      return posts
    default:
      return view.render('posts/index', { posts })
  }
})

// Outras preferências:
router.get('prefs', ({ request }) => {
  const language = request.language(['pt-BR', 'en'])
  const encoding = request.encoding(['gzip', 'br'])
  const charset = request.charset(['utf-8', 'ascii'])
  return { language, encoding, charset }
})
