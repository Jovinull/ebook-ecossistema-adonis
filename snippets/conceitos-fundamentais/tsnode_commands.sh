# HTTP server (executa TS sem compilar)
node --import=ts-node-maintained/register/esm bin/server.js

# Test runner
node --import=ts-node-maintained/register/esm bin/test.ts

# Ace (console/commands)
node --import=ts-node-maintained/register/esm bin/console.ts

# Executar um arquivo TS qualquer
node --import=ts-node-maintained/register/esm path/to/file.ts
