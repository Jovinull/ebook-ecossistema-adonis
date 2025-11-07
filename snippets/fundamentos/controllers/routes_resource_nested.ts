// start/routes.ts
import router from '@adonisjs/core/services/router'
const CommentsController = () => import('#controllers/comments_controller')

router.resource('posts.comments', CommentsController)
