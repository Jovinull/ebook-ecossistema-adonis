import router from '@adonisjs/core/services/router'

router.get('/', ({ request }) => {
  const ip = request.ip()
  const ips = request.ips() // mais confiável → menos confiável
  return { ip, ips }
})
