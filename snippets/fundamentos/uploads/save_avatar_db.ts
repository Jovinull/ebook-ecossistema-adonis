// Salvando nome do arquivo no banco (exemplo fictício)
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
// import User from '#models/user'

export async function persistAvatar({ request, auth }: HttpContext) {
  const avatar = request.file('avatar', {
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  })
  if (!avatar || !avatar.isValid) return { ok: false }

  await avatar.move(app.makePath('uploads'), {
    name: `${cuid()}.${avatar.extname}`,
  })

  // Exemplo: salvar no usuário autenticado
  // const user = auth.user!
  // user.avatar = avatar.fileName!
  // await user.save()

  return { stored: avatar.fileName }
}
