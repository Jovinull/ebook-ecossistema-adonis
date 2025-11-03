import { HttpContext } from '@adonisjs/core/http'

export function useRequestId(): string | undefined {
    // Contexto "da vez" (escopo da requisição) via AsyncLocalStorage do AdonisJS
    const ctx = HttpContext.get()
    return ctx?.request.header('x-request-id')
}
