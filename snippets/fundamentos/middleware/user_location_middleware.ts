// app/middleware/user_location_middleware.ts
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class UserLocationMiddleware {
  async handle(_ctx: HttpContext, next: NextFn) {
    // lógica antes...
    await next()
    // ...lógica depois
  }
}
