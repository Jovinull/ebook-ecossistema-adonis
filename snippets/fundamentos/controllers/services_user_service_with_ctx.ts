// app/services/user_service.ts
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UserService {
  constructor(private ctx: HttpContext) {}

  all() {
    // exemplo: usar ctx para log ou auth
    const user = this.ctx.auth?.user
    return [{ id: user?.id ?? 0, username: user?.email ?? 'guest' }]
  }
}
