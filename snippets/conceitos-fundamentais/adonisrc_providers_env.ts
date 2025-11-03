export default defineConfig({
    providers: [
        {
            file: () => import('./providers/app_provider'),
            environment: ['web', 'console'],
        },
    ],
})
