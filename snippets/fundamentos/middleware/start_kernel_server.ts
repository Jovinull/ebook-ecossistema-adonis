// start/kernel.ts (trecho: server middleware)
import server from '@adonisjs/core/services/server'

server.use([() => import('@adonisjs/static/static_middleware')])
