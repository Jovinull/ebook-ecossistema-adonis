export default defineConfig({
    preloads: [
        () => import('./start/view.js'),
        {
            file: () => import('./start/view.js'),
            environment: ['web', 'console', 'test'],
        },
    ],
})
