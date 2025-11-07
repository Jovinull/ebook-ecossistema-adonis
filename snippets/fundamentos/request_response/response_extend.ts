import { Response } from '@adonisjs/core/http'

Response.macro('ok', function (this: Response, data?: unknown) {
  return this.status(200).send(data ?? { ok: true })
})

declare module '@adonisjs/core/http' {
  export interface Response {
    ok(data?: unknown): Response
  }
}
