# Logs de todos os pacotes do AdonisJS
NODE_DEBUG="adonisjs:*" node ace serve --hmr

# Combinar com nativos do Node (fs, net)
NODE_DEBUG="adonisjs:*,net,fs" node ace serve --hmr
