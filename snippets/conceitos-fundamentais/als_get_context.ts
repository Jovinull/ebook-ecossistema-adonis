import { HttpContext } from '@adonisjs/core/http'

export default class UserService {
    all() {
        const ctx = HttpContext.getOrFail()
        console.log(ctx.request.url())
        return []
    }
}
