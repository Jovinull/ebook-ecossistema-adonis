import app from '@adonisjs/core/services/app'
import mail from '@adonisjs/mail/services/main'

await mail.send((message) => {
  message.attach(app.makePath('uploads/invoice.pdf'))
})
