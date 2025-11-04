import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

router.get('posts/:id', [PostsController, 'show']).as('posts.show')

// params posicionais
router.builder().params([1]).make('posts.show') // /posts/1
// por objeto
router.builder().params({ id: 20 }).make('posts.show') // /posts/20
// com query string
router.builder().qs({ page: 1, sort: 'asc' }).make('posts.index')
// prefixando URL
router.builder().prefixUrl('https://blog.adonisjs.com').params({ id: 1 }).make('posts.show')

// signed URL
router
  .builder()
  .prefixUrl('https://blog.adonisjs.com')
  .params({ id: 231 })
  .makeSigned('unsubscribe', { expiresIn: '3 days' })

// sem lookup (rota externa)
router
  .builder()
  .prefixUrl('https://your-app.com')
  .disableRouteLookup()
  .params({ token: 'foobar' })
  .make('/email/verify/:token') // /email/verify/foobar

// URLs para um domínio específico
router.builderForDomain('blog.adonisjs.com').params({ id: 1 }).make('posts.show')
