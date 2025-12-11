// config/inertia.ts
import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'

const inertiaConfig = defineConfig({
  sharedData: {
    appName: 'My App',
  },
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps
    extends InferSharedProps<typeof inertiaConfig> {
    propsSharedFromAMiddleware: number
  }
}
