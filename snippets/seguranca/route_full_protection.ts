import Post from '#models/post'
import PostPolicy from '#policies/post_policy'
import { middleware } from '#start/kernel'
import { apiThrottle } from '#start/limiter'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.put('/posts/:id', async ({ bouncer, params }) => {
      const post = await Post.findOrFail(params.id)

      await bouncer.with(PostPolicy).authorize('edit', post)
      // editar post
    })
  })
  .use(middleware.auth()) // exige usuário autenticado
  .use(apiThrottle)       // limita requisições
