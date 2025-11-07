// app/controllers/users_controller.ts
import { updateUserValidator } from '#validators/update_user_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async update({ request, auth }: HttpContext) {
    const payload = await request.validateUsing(updateUserValidator, {
      meta: { userId: auth.user!.id },
    })
    return payload
  }
}
