export default defineConfig({
    assetsBundler: {
        name: 'vite',
        devServer: { command: 'vite', args: [] },
        build: { command: 'vite', args: ['build'] },
    },
})
