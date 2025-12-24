import UserRegistered from '#events/user_registered'
import emitter from '@adonisjs/core/services/emitter'
import { test } from '@japa/runner'

test.group('User signup', () => {
  test('create a user account', async ({ client, cleanup }) => {
    const events = emitter.fake()
    cleanup(() => emitter.restore())

    await client.post('signup').form({
      email: 'foo@bar.com',
      password: 'secret',
    })

    events.assertEmitted(UserRegistered)
  })
})
