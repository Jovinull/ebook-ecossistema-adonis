import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  // Plugin do Japa (tests/bootstrap.ts)
  await codemods.registerJapaPlugin('sessionApiClient(app)', [
    { isNamed: false, module: '@adonisjs/core/services/app', identifier: 'app' },
    { isNamed: true, module: '@adonisjs/session/plugins/api_client', identifier: 'sessionApiClient' },
  ])

  // Políticas (app/policies/main.ts)
  await codemods.registerPolicies([
    { name: 'PostPolicy', path: '#policies/post_policy' },
  ])
}
