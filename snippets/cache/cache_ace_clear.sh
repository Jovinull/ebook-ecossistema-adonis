# Clear the default cache store
node ace cache:clear

# Clear a specific cache store
node ace cache:clear redis

# Clear a specific namespace
node ace cache:clear store --namespace users

# Clear multiple specific tags
node ace cache:clear store --tags products --tags users
