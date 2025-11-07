// app/controllers/invoices_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class InvoicesController {
  update({ request }: HttpContext) {
    const documents = request.files('documents') // MultipartFile[]
    return documents.map((d) => ({
      name: d.clientName,
      size: d.size,
      ext: d.extname,
    }))
  }
}
