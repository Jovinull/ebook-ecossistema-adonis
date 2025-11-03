import { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
    async index({ request, response }: HttpContext) {
        // ...
    }
}
