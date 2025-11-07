import router from '@adonisjs/core/services/router'
import { createReadStream } from 'node:fs'

router.get('/image', ({ response }) => {
  // defina headers você mesmo
  response.header('Content-Type', 'image/jpeg')

  const image = createReadStream('./some-file.jpg')
  response.stream(image, () => {
    // Customize erro e status
    return ['Unable to serve file. Try again', 400]
  })
})
