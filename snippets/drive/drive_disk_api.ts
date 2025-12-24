const key = 'user-avatars/user-1.png'

await disk.put(key, Buffer.from('...'))
await disk.get(key)
await disk.delete(key)

await disk.copy('a.png', 'b.png')
await disk.move('tmp/a.png', 'uploads/a.png')

await disk.deleteAll('tmp/')
