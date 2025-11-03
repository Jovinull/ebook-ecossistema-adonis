import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  // Ex.: registrar bodyparser no stack do router
  await codemods.registerMiddleware('router', [
    { path: '@adonisjs/core/bodyparser_middleware' }
  ])

  // Ex.: named middleware "auth"
  await codemods.registerMiddleware('named', [
    { name: 'auth', path: '@adonisjs/auth/auth_middleware' }
  ])
}
