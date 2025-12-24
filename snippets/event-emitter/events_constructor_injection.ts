import User from '#models/user'
import TokensService from '#services/tokens_service'
import { inject } from '@adonisjs/core'

@inject()
export default class SendVerificationEmail {
  constructor(protected tokensService: TokensService) {}

  handle(user: User) {
    const token = this.tokensService.generate(user.email)
    console.log(token)
  }
}
