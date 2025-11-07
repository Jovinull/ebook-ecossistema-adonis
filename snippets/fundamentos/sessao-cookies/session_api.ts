import router from '@adonisjs/core/services/router'

router.get('/session-demo', ({ session }) => {
  session.put('user', { id: 1, email: 'foo@bar.com' })
  session.put('user.email', 'bar@foo.com')
  session.increment('visits')
  session.increment('visits', 4)
  session.decrement('visits', 2)

  const email = session.get('user.email')
  const hasVisits = session.has('visits')
  const pulled = session.pull('temp') // lê e remove

  return { email, hasVisits, pulled, all: session.all() }
})
