import ace from '@adonisjs/core/services/ace'

const command = await ace.exec('make:controller', ['user', '--resource'])

console.log(command.exitCode)
console.log(command.result)
console.log(command.error)
