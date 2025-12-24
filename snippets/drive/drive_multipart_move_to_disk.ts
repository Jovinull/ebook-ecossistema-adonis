const image = request.file('image')!

await image.moveToDisk('user-1-avatar.png')
await image.moveToDisk('user-1-avatar.png', 's3')
