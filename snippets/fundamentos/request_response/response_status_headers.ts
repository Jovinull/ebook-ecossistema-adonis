import router from '@adonisjs/core/services/router'

router.get('/', ({ response }) => {
  response.safeStatus(200) // só define se ainda não houver status
  response.safeStatus(201) // ignorado

  response.safeHeader('Content-Type', 'text/html')
  response.safeHeader('Content-Type', 'text/html') // ignorado

  response.header('X-Example', 'one')
  response.header('X-Example', 'two') // sobrescreve
  response.append('Set-Cookie', 'a=1')
  response.append('Set-Cookie', 'b=2')
  response.removeHeader('X-Example')

  return '<h1>OK</h1>'
})
