import type { UsersController } from '#controllers/users_controller'
import type { InferPageProps } from '@adonisjs/inertia/types'

export function UsersPage(
  props: InferPageProps<UsersController, 'index'>
) {
  // props.users: array tipado corretamente
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
