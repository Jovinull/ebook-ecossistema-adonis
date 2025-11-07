import { ExceptionHandler, HttpContext } from '@adonisjs/core/http'
import { errors } from '@vinejs/vine'

export default class HttpExceptionHandler extends ExceptionHandler {
  async handle(error: unknown, ctx: HttpContext) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      ctx.response.status(422).send(error.messages)
      return
    }
    return super.handle(error, ctx)
  }
}
