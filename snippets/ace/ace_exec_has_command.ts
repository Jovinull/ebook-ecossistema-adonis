import ace from '@adonisjs/core/services/ace'

/**
 * Garante que os comandos foram carregados
 */
await ace.boot()

if (ace.hasCommand('make:controller')) {
  await ace.exec('make:controller', ['user', '--resource'])
}
