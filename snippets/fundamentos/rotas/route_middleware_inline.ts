import router from '@adonisjs/core/services/router'

router
  .get('posts', () => {
    console.log('Inside route handler')
    return 'Viewing all posts'
  })
  .use((_, next) => {
    console.log('Inside middleware')
    return next()
  })
