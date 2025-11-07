import User from '#models/user'
import { dd } from '@adonisjs/core/services/dumper'
import router from '@adonisjs/core/services/router'

router.get('/users', async () => {
  const users = await User.all()
  dd(users) // visita /users para ver saída rica e interromper fluxo
})
