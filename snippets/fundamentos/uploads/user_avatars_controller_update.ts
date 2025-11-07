// app/controllers/user_avatars_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class UserAvatarsController {
  update({ request }: HttpContext) {
    const avatar = request.file('avatar')
    // avatar é MultipartFile | null
    return { present: !!avatar, meta: avatar?.meta ?? {} }
  }
}
