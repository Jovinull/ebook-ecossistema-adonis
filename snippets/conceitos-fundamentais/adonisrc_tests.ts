export default defineConfig({
    tests: {
        timeout: 2000,
        forceExit: false,
        suites: [
            {
                name: 'functional',
                files: ['tests/functional/**/*.spec.ts'],
                timeout: 30_000,
            },
        ],
    },
})
