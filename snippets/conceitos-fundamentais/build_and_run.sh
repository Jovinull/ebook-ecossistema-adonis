# Criar build de produção (standalone JS em ./build)
node ace build

cd build
npm ci --omit=dev
node bin/server.js

# Flags extras
# node ace build --assets-args="--debug --base=/public"
# node ace build --no-assets
