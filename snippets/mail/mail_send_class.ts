import VerifyEmailNotification from '#mails/verify_email'
import mail from '@adonisjs/mail/services/main'

await mail.send(new VerifyEmailNotification())
await mail.sendLater(new VerifyEmailNotification())
