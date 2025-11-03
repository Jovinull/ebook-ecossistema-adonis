import { Request } from '@adonisjs/core/http'

Request.macro('wantsJSON', function (this: Request) {
    const firstType = this.types()[0]
    return firstType?.includes('/json') || false
})
