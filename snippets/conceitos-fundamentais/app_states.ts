import app from '@adonisjs/core/services/app'

console.log(app.isBooted)      // true se estiver bootado
console.log(app.isReady)       // true se estiver pronto
console.log(app.isTerminating) // true se estiver encerrando
console.log(app.isTerminated)  // true se já encerrou
