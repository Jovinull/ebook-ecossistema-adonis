// Movendo para storage/uploads
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export async function moveAvatar({ request }: HttpContext) {
  const avatar = request.file('avatar', {
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  })
  if (!avatar || !avatar.isValid) return { ok: false }

  await avatar.move(app.makePath('storage/uploads'))
  return { fileName: avatar.fileName, filePath: avatar.filePath }
}
