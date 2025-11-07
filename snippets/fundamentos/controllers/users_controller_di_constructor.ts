// app/controllers/users_controller.ts
import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  index() {
    return this.userService.all()
  }
}
