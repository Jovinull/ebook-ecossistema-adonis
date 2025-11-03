import { HttpContext, HttpExceptionHandler } from '@adonisjs/core/http'

export default class ExceptionHandler extends HttpExceptionHandler {
    async handle(error: unknown, ctx: HttpContext) {
        return super.handle(error, ctx)
    }

    async report(error: unknown, ctx: HttpContext) {
        return super.report(error, ctx)
    }
}
