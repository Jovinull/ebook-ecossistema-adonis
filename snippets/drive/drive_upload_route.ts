import { cuid } from '@adonisjs/core/helpers'
import router from '@adonisjs/core/services/router'

router.put('/me', async ({ request, response }) => {
  const image = request.file('avatar', {
    size: '2mb',
    extnames: ['jpeg', 'jpg', 'png'],
  })

  if (!image) {
    return response.badRequest({ error: 'Image missing' })
  }

  const key = `uploads/${cuid()}.${image.extname}`
  await image.moveToDisk(key)

  return {
    message: 'Image uploaded',
    url: image.meta.url,
  }
})
