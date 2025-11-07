// start/routes.ts
import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

router.resource('posts', PostsController).only(['index', 'store', 'destroy'])
router.resource('posts', PostsController).except(['destroy'])
