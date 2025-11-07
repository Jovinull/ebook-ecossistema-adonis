// tests/middleware/test_server_pipeline.ts (exemplo didático)
import UserLocationMiddleware from '#middleware/user_location_middleware'
import server from '@adonisjs/core/services/server'
import testUtils from '@adonisjs/core/services/test_utils'

const pipeline = server.pipeline([UserLocationMiddleware])
const ctx = testUtils.createHttpContext()

await pipeline
  .finalHandler(() => {
    // todos chamaram next
  })
  .errorHandler((_error) => {
    // houve exceção
  })
  .run(ctx)
