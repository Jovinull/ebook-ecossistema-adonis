import { createServer } from 'node:http'
import testUtils from '@adonisjs/core/services/test_utils'

createServer((req, res) => {
    const ctx = testUtils.createHttpContext({ req, res })
    // ...
})
