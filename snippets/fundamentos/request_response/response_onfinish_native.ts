import router from '@adonisjs/core/services/router'

router.get('posts', ({ response }) => {
  response.onFinish(() => {
    // cleanup, métricas, etc.
    // executa depois que a resposta foi enviada ao socket
  })

  // Acessar o objeto res do Node:
  console.log(response.response.constructor.name)
  return 'ok'
})
