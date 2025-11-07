// app/middleware/auth_middleware.ts (exemplo didático)
export type AuthGuards = 'web' | 'api'

export default class AuthMiddleware {
  async handle(_ctx: any, next: any, options: { guard: AuthGuards }) {
    // usar options.guard
    await next()
  }
}
