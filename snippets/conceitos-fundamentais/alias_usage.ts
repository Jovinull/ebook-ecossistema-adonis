import User from '#models/user'
import Permission from '#models/permission'

export async function example() {
  const users = await User.query().preload('permissions', (q) => q.where('name', 'like', 'admin%'))
  return users.map((u) => u.toJSON())
}
