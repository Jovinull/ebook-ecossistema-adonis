import { MailResponse } from '@adonisjs/mail'
import type { MailTransportContract, NodeMailerMessage } from '@adonisjs/mail/types'
import nodemailer from 'nodemailer'

export type PostmarkConfig = {
  auth: { apiKey: string }
}

export class PostmarkTransport implements MailTransportContract {
  #config: PostmarkConfig
  constructor(config: PostmarkConfig) {
    this.#config = config
  }

  async send(message: NodeMailerMessage, config?: PostmarkConfig): Promise<MailResponse> {
    const transporter = nodemailer.createTransport({
      // adapter do transport real aqui...
    } as any)

    const response = await transporter.sendMail(message as any)
    return new MailResponse((response as any).messageId, (response as any).envelope, response as any)
  }
}
