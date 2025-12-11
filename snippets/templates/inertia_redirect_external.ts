import type { HttpContext } from '@adonisjs/core/http'

export async function externalRedirect({ inertia }: HttpContext) {
  return inertia.location('https://adonisjs.com')
}
