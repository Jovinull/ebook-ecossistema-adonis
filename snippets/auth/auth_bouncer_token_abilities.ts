import type User from '#models/user'
import { AccessToken } from '@adonisjs/auth/access_tokens'
import { Bouncer } from '@adonisjs/bouncer'

export const createProject = Bouncer.ability(
  (user: User & { currentAccessToken?: AccessToken }) => {
    if (!user.currentAccessToken) {
      return (user as any).isAdmin
    }

    return (user as any).isAdmin && user.currentAccessToken.allows('project:create')
  }
)
