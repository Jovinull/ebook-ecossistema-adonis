// start/routes.ts
import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { normalize, sep } from 'node:path'

const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/

router.get('/uploads/*', ({ request, response }) => {
  const parts = request.param('*') as string[]
  const filePath = parts.join(sep)
  const normalized = normalize(filePath)

  if (PATH_TRAVERSAL_REGEX.test(normalized)) {
    return response.badRequest('Malformed path')
  }

  const absolutePath = app.makePath('uploads', normalized)
  return response.download(absolutePath)
})
