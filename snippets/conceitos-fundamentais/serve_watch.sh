# Servidor com watcher e auto-start do bundler (ex.: Vite)
node ace serve --watch

# Passando flags para o servidor do Vite
node ace serve --watch --assets-args="--debug --base=/public"

# Sem assets (desabilita dev server do Vite)
node ace serve --watch --no-assets

# Passando flags do Node para o processo filho
node ace --no-warnings --inspect serve --watch
