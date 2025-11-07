// Validação inline de vários arquivos
import type { HttpContext } from '@adonisjs/core/http'

export async function updateDocumentsInline({ request, response }: HttpContext) {
  const documents = request.files('documents', {
    size: '2mb',
    extnames: ['jpg', 'png', 'pdf'],
  })

  const invalid = documents.filter((d) => !d.isValid)

  if (invalid.length) {
    return response.badRequest({
      errors: invalid.map((d) => ({
        name: d.clientName,
        errors: d.errors,
      })),
    })
  }

  return { count: documents.length }
}
