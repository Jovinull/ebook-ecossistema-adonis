import UserRegistered from '#events/user_registered'
import emitter from '@adonisjs/core/services/emitter'

emitter.on(UserRegistered, function (event) {
  console.log(event.user)
})
