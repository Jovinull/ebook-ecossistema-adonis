// Validação inline de um arquivo
import type { HttpContext } from '@adonisjs/core/http'

export async function updateAvatarInline({ request, response }: HttpContext) {
  const avatar = request.file('avatar', {
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  })

  if (!avatar) {
    return response.badRequest({ errors: [{ message: 'Avatar é obrigatório' }] })
  }

  if (!avatar.isValid) {
    return response.badRequest({ errors: avatar.errors })
  }

  return { ok: true }
}
