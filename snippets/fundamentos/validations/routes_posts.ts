// start/routes.ts
import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

router.post('posts', [PostsController, 'store'])
router.put('posts/:id', [PostsController, 'update'])
