import router from '@adonisjs/core/services/router'

router
  .get('/posts/:id', ({ params }) => {
    // aqui já é number por causa do cast
    return `ID: ${params.id} (type: ${typeof params.id})`
  })
  .where('id', {
    match: /^[0-9]+$/,
    cast: (value) => Number(value),
  })
