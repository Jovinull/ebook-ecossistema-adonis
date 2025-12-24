import { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async store({ i18n, session }: HttpContext) {
    session.flash('success', {
      message: i18n.t('post.created'),
    })
  }
}
