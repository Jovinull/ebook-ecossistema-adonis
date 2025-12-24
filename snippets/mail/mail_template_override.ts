import { Message } from '@adonisjs/mail'

Message.templateEngine = {
  async render(templatePath, data) {
    return `rendered ${templatePath} with ${JSON.stringify(data)}`
  },
}
