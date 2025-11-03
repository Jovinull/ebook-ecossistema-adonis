import app from '@adonisjs/core/services/app'

console.log(app.getEnvironment()) // 'web' | 'console' | 'test' | 'repl'
console.log(app.isReady)          // true quando pronto

const migration = app.migrationsPath('users.ts')
// /project_root/database/migrations/users.ts
