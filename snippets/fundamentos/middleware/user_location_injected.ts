// app/middleware/user_location_middleware.ts (com injeção)
import { GeoIpService } from '#services/geoip_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

@inject()
export default class UserLocationMiddleware {
  constructor(protected geoIp: GeoIpService) {}

  async handle(ctx: HttpContext, next: NextFn) {
    const ip = ctx.request.ip()
    // @ts-expect-error exemplo: anexando ao ctx
    ctx.location = await this.geoIp.lookup(ip)
    await next()
  }
}
