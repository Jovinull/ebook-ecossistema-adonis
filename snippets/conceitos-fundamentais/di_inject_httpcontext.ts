// Service
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UserService {
    constructor(protected ctx: HttpContext) { }

    all() {
        // usar this.ctx conforme necessário
        return []
    }
}

// Controller
import { inject as Inject } from '@adonisjs/core'
import { HttpContext as Ctx } from '@adonisjs/core/http'
import UserService from '#services/user_service'

export default class UsersController {
    @Inject()
    index(ctx: Ctx, userService: UserService) {
        return userService.all()
    }
}
