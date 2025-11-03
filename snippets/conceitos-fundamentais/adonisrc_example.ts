export default defineConfig({
    providers: [
        () => import('./providers/app_provider'),
        () => import('@adonisjs/core/providers/http_provider'),
    ],
    preloads: [() => import('./start/view')],
    metaFiles: [
        {
            pattern: 'resources/views/**/*.edge',
            reloadServer: false,
        },
    ],
})
