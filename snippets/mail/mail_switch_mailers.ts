import mail from '@adonisjs/mail/services/main'

mail.use() // default
mail.use('mailgun') // named
