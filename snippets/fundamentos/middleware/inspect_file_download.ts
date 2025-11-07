// app/middleware/inspect_file_download.ts
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class InspectDownloadMiddleware {
  async handle({ response }: HttpContext, next: NextFn) {
    await next()
    if (response.hasFileToStream) {
      // console.log(response.fileToStream.generateEtag)
      // console.log(response.fileToStream.path)
    }
  }
}
