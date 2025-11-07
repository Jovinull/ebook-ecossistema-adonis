import router from '@adonisjs/core/services/router'

router.post('/contact', ({ session, request, response }) => {
  const data = request.all()
  // persistir data...

  session.flash('notification', {
    type: 'success',
    message: 'Thanks for contacting. We will get back to you',
  })

  return response.redirect().back()
})

router.get('/contact', ({ view }) => {
  return view.render('contact')
})
