import Post from '#models/post'
import User from '#models/user'
import { Bouncer } from '@adonisjs/bouncer'

export const viewPost = Bouncer.ability(
  { allowGuest: true },
  (user: User | null, post: Post) => {
    if (post.isPublished) {
      return true
    }

    if (!user) {
      return false
    }

    return user.id === post.userId
  }
)
