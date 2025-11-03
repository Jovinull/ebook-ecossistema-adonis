import router from '@adonisjs/core/services/router'

router.get('/', ({ request, response }) => {
    console.log(request.url())
    console.log(request.headers())
    console.log(request.qs())
    console.log(request.body())

    response.send({ hello: 'world' })
})
