export default defineConfig({
    providers: [
        () => import('./providers/app_provider'),
        () => import('@adonisjs/core/providers/http_provider'),
    ],
})
