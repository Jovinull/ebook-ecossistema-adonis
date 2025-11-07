// app/controllers/assets_controller.ts
// Processando multipart manualmente (autoProcess = false ou rota em processManually)
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'

export default class AssetsController {
  async store({ request }: HttpContext) {
    // 1) Listener de arquivos (curinga para todos os campos)
    request.multipart.onFile('*', {}, async (part, reporter) => {
      part.pause()
      part.on('data', reporter)

      const outPath = app.makePath('uploads', part.file.clientName)
      await pipeline(part, createWriteStream(outPath))
      return { outPath }
    })

    // 2) Processa o stream
    await request.multipart.process()

    // 3) Arquivos processados disponíveis aqui
    return request.allFiles()
  }
}
