import { abilities } from '#abilities/main'
import { policies } from '#policies/main'
import { Bouncer } from '@adonisjs/bouncer'
import type { HttpContext, NextFn } from '@adonisjs/core/http'

export default class InitializeBouncerMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    ctx.bouncer = new Bouncer(
      () => ctx.auth.user || null,
      abilities,
      policies
    ).setContainerResolver(ctx.containerResolver)

    if ('view' in ctx) {
      ctx.view.share(ctx.bouncer.edgeHelpers)
    }

    return next()
  }
}
