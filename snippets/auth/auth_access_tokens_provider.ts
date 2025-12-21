import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { BaseModel } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  static accessTokens = DbAccessTokensProvider.forModel(User)
}
