import { errors } from '@adonisjs/bouncer'
import {
    ExceptionHandler,
    HttpContext,
} from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class HttpExceptionHandler extends ExceptionHandler {
  protected debug = !app.inProduction
  protected renderStatusPages = app.inProduction

  async handle(error: unknown, ctx: HttpContext) {
    if (error instanceof errors.E_AUTHORIZATION_FAILURE) {
      return ctx.response
        .status(error.status)
        .send(error.getResponseMessage(ctx))
    }

    return super.handle(error, ctx)
  }
}
