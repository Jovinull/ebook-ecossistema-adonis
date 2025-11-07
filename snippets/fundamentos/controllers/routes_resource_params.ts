// start/routes.ts
import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

router.resource('posts', PostsController).params({ posts: 'post' })
// gera /posts/:post em show/edit/update/destroy
