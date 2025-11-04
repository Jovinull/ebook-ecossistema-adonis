import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('users', ({ subdomains }) => {
      return `Listing users for ${subdomains.tenant}`
    })
  })
  .domain(':tenant.adonisjs.com')
