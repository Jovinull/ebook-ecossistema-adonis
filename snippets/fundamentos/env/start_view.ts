// start/view.ts (preload)
import env from '#start/env'
import edge from 'edge.js'

// Disponibiliza "env" no Edge (SSR)
edge.global('env', env)
