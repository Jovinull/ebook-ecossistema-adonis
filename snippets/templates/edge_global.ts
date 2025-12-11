import env from '#start/env'
import edge from 'edge.js'

edge.global('appUrl', env.get('APP_URL'))
edge.global('appName', 'Meu Painel')
