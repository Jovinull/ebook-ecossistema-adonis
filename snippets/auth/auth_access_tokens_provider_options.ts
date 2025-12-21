import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { BaseModel } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })
}
