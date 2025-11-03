export default defineConfig({
    commands: [
        () => import('@adonisjs/core/commands'),
        () => import('@adonisjs/lucid/commands'),
    ],
    commandsAliases: {
        migrate: 'migration:run',
        up: 'migration:run',
    },
})
