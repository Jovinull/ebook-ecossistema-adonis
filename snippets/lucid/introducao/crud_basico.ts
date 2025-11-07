import User from '#models/user'

/**
 * CREATE
 */
// Se o modelo tiver colunas (ex.: username, email), preencha-as aqui.
// A versão mínima, com apenas id/createdAt/updatedAt, criará um registro vazio.
const created = await User.create({
  /* username: 'alice', email: 'a@ex.com' */
})

/**
 * READ
 */
const foundById = await User.find(created.id) // pelo id (ou null)
const firstUser = await User.query().orderBy('id', 'asc').first()

/**
 * UPDATE
 */
if (foundById) {
  // foundById.merge({ username: 'alice_2' })
  await foundById.save()
}

/**
 * DELETE
 */
if (firstUser) {
  await firstUser.delete()
}

// Create
const u = await User.create({
  username: 'rlanz',
  email: '[romain@adonisjs.com](mailto:romain@adonisjs.com)',
})

// Read
const found = await User.find(1)

// Update
const toUpdate = await User.find(1)
if (toUpdate) {
  toUpdate.username = 'romain'
  await toUpdate.save()
}

// Delete
const toDelete = await User.find(1)
await toDelete?.delete()
