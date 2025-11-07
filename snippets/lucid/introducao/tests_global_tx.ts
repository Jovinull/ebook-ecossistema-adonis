import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('User', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())
})
