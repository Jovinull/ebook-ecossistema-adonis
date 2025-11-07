import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'

router.get('/uploads/:file', ({ response, params }) => {
  const filePath = app.makePath(`uploads/${params.file}`)
  const generateEtag = true

  response.download(filePath, generateEtag, (error) => {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return ['File does not exists', 404]
    }
    return ['Cannot download file', 400]
  })
})
