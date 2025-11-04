import router from '@adonisjs/core/services/router'

router.get('/docs/:category/*', ({ params }) => {
  console.log(params.category) // ex.: 'api'
  console.log(params['*'])     // ex.: ['sql', 'orm']
  return 'ok'
})
