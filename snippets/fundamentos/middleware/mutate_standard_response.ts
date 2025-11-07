// app/middleware/mutate_standard_response.ts
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class MutateResponseMiddleware {
  async handle({ response }: HttpContext, next: NextFn) {
    await next()
    if (response.hasContent) {
      const original = response.content
      const newResponse = { wrapped: true, data: original }
      response.send(newResponse)
    }
  }
}
