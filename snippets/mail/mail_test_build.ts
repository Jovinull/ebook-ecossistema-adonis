import VerifyEmailNotification from '#mails/verify_email'
import { test } from '@japa/runner'

test.group('Verify email notification', () => {
  test('prepare email for sending', async () => {
    const email = new VerifyEmailNotification()
    await email.buildWithContents()

    email.message.assertTo('user_email@example.org')
    email.message.assertSubject('Verify email')
  })
})
