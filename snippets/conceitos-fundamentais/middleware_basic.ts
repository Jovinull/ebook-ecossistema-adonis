import { HttpContext } from '@adonisjs/core/http'

export default class AuthMiddleware {
    async handle({ request, response }: HttpContext, next: () => Promise<void>) {
        // ...
        await next()
    }
}
