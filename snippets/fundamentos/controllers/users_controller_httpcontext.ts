// app/controllers/users_controller.ts
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  index(ctx: HttpContext) {
    // você pode usar ctx.request, ctx.response, ctx.auth, etc.
    return { ip: ctx.request.ip() }
  }
}
