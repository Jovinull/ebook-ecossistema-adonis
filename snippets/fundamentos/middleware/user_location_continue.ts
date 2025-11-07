import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class UserLocationMiddleware {
  async handle(_ctx: HttpContext, next: NextFn) {
    await next()
  }
}
