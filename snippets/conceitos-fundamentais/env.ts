import type Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  // Validações de ENV (start/env.ts)
  await codemods.defineEnvValidations({
    leadingComment: 'Variáveis de ambiente da aplicação',
    variables: {
      PORT: 'Env.schema.number()',
      HOST: 'Env.schema.string()',
    },
  })

  // Inserir variáveis em .env e .env.example
  await codemods.defineEnvVariables(
    {
      APP_NAME: 'adonis-app',
      APP_DEBUG: 'false',
    },
    {
      omitFromExample: ['APP_DEBUG'],
    }
  )
}
