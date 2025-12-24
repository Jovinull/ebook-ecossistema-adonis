import mail from '@adonisjs/mail/services/main'

await mail.sendLater((message) => {
  message
    .to('user@example.org')
    .from('info@example.org')
    .subject('Verify your email address')
})
