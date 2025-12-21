import { DbRememberMeTokensProvider } from '@adonisjs/auth/session'
import { BaseModel } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  static rememberMeTokens = DbRememberMeTokensProvider.forModel(User)
}
