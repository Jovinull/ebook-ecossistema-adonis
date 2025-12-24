await image.moveToDisk('user-1-avatar.png', 's3', {
  contentType: 'image/png',
  moveAs: 'buffer',
})
