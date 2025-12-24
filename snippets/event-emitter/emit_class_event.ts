import UserRegistered from '#events/user_registered'
import User from '#models/user'

export default class UsersController {
  async store() {
    const user = await User.create({})

    UserRegistered.dispatch(user)
  }
}
