// app/validators/user_validator.ts
import vine from '@vinejs/vine'

export const updateAvatarValidator = vine.compile(
  vine.object({
    avatar: vine.file({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    }),
  })
)

// app/controllers/user_avatars_controller.ts
import { updateAvatarValidator } from '#validators/user_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class UserAvatarsController {
  async update({ request }: HttpContext) {
    const { avatar } = await request.validateUsing(updateAvatarValidator)
    return { received: !!avatar }
  }
}
