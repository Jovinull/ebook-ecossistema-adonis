# boolean flag
node ace make:controller:demo --resource
# resource === true

node ace make:controller:demo
# resource === undefined

node ace make:controller:demo --no-resource
# resource === false
