import UserRegistered from '#events/user_registered'
import TokensService from '#services/tokens_service'
import { inject } from '@adonisjs/core'

export default class SendVerificationEmail {
  @inject()
  handle(event: UserRegistered, tokensService: TokensService) {
    const token = tokensService.generate(event.user.email)
    console.log(token)
  }
}
