import { createUserValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)

    // payload já tipado e seguro
    // ... criar usuário
  }
}
