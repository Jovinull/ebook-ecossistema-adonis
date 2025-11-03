import { Request } from '@adonisjs/core/http'

Request.getter('hasRequestId', function (this: Request) {
    return this.header('x-request-id')
})
