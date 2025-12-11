import encryption from '@adonisjs/core/services/encryption'

const token = encryption.encrypt({ userId: 1 }, '2 hours')

const payload = encryption.decrypt(token)
// { userId: 1 }
