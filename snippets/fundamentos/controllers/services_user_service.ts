// app/services/user_service.ts
export default class UserService {
  all() {
    // buscar no banco, cache, etc.
    return [{ id: 1, username: 'virk' }]
  }
}
