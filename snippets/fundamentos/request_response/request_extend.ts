// Extensão via macros
import { Request } from '@adonisjs/core/http'

Request.macro('tenantId', function (this: Request) {
  // exemplo: extrair tenant de header ou subdomínio
  return this.header('x-tenant-id') ?? null
})

declare module '@adonisjs/core/http' {
  export interface Request {
    tenantId(): string | null
  }
}
