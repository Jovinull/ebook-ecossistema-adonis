import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'

router.get('/force/:file', ({ response, params }) => {
  const filePath = app.makePath(`uploads/${params.file}`)
  response.attachment(filePath, 'custom-filename.jpg')
})
