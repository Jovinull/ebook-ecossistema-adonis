import testUtils from '@adonisjs/core/services/test_utils'

const ctx = testUtils.createHttpContext()
// ctx.route e ctx.params são undefined por padrão (sem rota real).

export default ctx
