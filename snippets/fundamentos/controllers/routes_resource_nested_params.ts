// start/routes.ts
import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')
const CommentsController = () => import('#controllers/comments_controller')

router.resource('posts.comments', CommentsController).params({
  posts: 'post',
  comments: 'comment',
})
