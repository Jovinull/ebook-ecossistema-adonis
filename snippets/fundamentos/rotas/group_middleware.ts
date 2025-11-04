import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router
      .get('posts', () => 'ok')
      .use((_, next) => {
        console.log('logging from route middleware')
        return next()
      })
  })
  .use((_, next) => {
    console.log('logging from group middleware')
    return next()
  })
