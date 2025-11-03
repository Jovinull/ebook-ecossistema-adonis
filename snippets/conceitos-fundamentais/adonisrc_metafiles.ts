export default defineConfig({
    metaFiles: [
        { pattern: 'public/**', reloadServer: false },
        { pattern: 'resources/views/**/*.edge', reloadServer: false },
    ],
})
