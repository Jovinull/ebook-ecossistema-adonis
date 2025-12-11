import hash from '@adonisjs/core/services/hash'

async function verifyAndRehash(user: { password: string }, plainPassword: string) {
  if (await hash.verify(user.password, plainPassword)) {
    if (await hash.needsReHash(user.password)) {
      user.password = await hash.make(plainPassword)
      // await user.save()
    }
  }
}
