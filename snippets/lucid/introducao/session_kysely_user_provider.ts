import { symbols } from '@adonisjs/auth'
import type {
  SessionGuardUser,
  SessionUserProviderContract,
} from '@adonisjs/auth/types/session'

// import { db } from 'sua-camada-sql'
type Users = { id: number /* ...outros campos... */ }

export class SessionKyselyUserProvider implements SessionUserProviderContract<Users> {
  declare [symbols.PROVIDER_REAL_USER]: Users

  async createUserForGuard(user: Users): Promise<SessionGuardUser<Users>> {
    return {
      getId() {
        return user.id
      },
      getOriginal() {
        return user
      },
    }
  }

  async findById(id: number): Promise<SessionGuardUser<Users> | null> {
    // Exemplo com Kysely (descomentaria e ajustaria para seu setup):
    // const user = await db
    //   .selectFrom('users')
    //   .selectAll()
    //   .where('id', '=', id)
    //   .executeTakeFirst()

    const user: Users | null = null // placeholder de exemplo
    return user ? this.createUserForGuard(user) : null
  }
}
