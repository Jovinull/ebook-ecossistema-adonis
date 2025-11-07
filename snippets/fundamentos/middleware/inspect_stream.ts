// app/middleware/inspect_stream.ts
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class InspectStreamMiddleware {
  async handle({ response }: HttpContext, next: NextFn) {
    await next()
    if (response.hasStream) {
      response.outgoingStream.on('data', (chunk) => {
        // monitorar stream
        void chunk
      })
    }
  }
}
