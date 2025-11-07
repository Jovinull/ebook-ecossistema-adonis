import router from '@adonisjs/core/services/router'

router.get('/cart', ({ request }) => {
  const cartItems = request.cookie('cart_items', [])
  return cartItems
})

router.post('/cart', ({ request, response }) => {
  const id = request.input('product_id')
  response.cookie('cart_items', [{ id }])
  return 'ok'
})

router.delete('/cart', ({ response }) => {
  response.clearCookie('cart_items')
  return 'cleared'
})
