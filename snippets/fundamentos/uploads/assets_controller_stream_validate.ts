// Validação das partes no modo manual
import type { HttpContext } from '@adonisjs/core/http'

export async function assetsWithValidation({ request }: HttpContext) {
  request.multipart.onFile(
    '*',
    {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    },
    async (part, reporter) => {
      part.pause()
      part.on('data', reporter)
      // ... pipeline para destino (S3, disco, etc.)
    }
  )

  await request.multipart.process()
  return request.allFiles()
}
