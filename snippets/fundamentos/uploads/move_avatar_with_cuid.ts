// Nome único com cuid + extensão detectada
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export async function moveAvatarWithCuid({ request }: HttpContext) {
  const avatar = request.file('avatar', {
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  })
  if (!avatar || !avatar.isValid) return { ok: false }

  await avatar.move(app.makePath('storage/uploads'), {
    name: `${cuid()}.${avatar.extname}`,
  })

  return { fileName: avatar.fileName }
}
