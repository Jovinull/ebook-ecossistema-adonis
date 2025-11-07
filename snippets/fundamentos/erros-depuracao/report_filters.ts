import { ExceptionHandler, HttpContext } from '@adonisjs/core/http'

export default class HttpExceptionHandler extends ExceptionHandler {
  protected ignoreStatuses = [401, 400, 422, 403]

  protected context(ctx: HttpContext) {
    return {
      requestId: ctx.requestId,
      userId: ctx.auth.user?.id,
      ip: ctx.request.ip(),
    }
  }
}
