import { defineConfig } from '@adonisjs/core/app'

export default defineConfig({
  hooks: {
    onBuildStarting: [() => import('./hooks/on_build_starting')],
    onBuildCompleted: [],
    onDevServerStarted: [],
    onSourceFileChanged: [],
  },
})
