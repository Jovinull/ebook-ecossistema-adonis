export default defineConfig({
    providers: [
        () => import('@adonisjs/core/providers/app_provider'),
        () => import('@adonisjs/core/providers/http_provider'),
        () => import('@adonisjs/core/providers/hash_provider'),
        () => import('./providers/app_provider.js'),

        // Exemplos de providers limitados por ambiente:
        // { file: () => import('@adonisjs/core/providers/http_provider'), environment: ['web'] },
        // { file: () => import('./providers/app_provider.js'), environment: ['web', 'console', 'test'] },
    ],
})
