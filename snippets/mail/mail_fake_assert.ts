import VerifyEmailNotification from '#mails/verify_email'
import mail from '@adonisjs/mail/services/main'
import { test } from '@japa/runner'

test.group('Users | register', () => {
  test('create a new user account', async ({ client }) => {
    const { mails } = mail.fake()

    await client.post('signup').send({
      email: 'foo@bar.com',
      password: 'secret',
    })

    mails.assertSent(VerifyEmailNotification)
  })
})
