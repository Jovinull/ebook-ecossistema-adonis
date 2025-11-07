import { ExceptionHandler } from '@adonisjs/core/http'
import type { StatusPageRange, StatusPageRenderer } from '@adonisjs/http-server/types'

export default class HttpExceptionHandler extends ExceptionHandler {
  protected statusPages: Record<StatusPageRange, StatusPageRenderer> = {
    '404': (_, { view }) => view.render('errors/not-found'),
    '500..599': (_, { view }) => view.render('errors/server-error'),
  }
}
