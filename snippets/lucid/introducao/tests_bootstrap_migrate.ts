import testUtils from '@adonisjs/core/services/test_utils'

export const runnerHooks = {
  setup: [() => testUtils.db().migrate()],
  teardown: [],
}
