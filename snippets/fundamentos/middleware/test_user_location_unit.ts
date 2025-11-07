// tests/middleware/test_user_location_unit.ts (exemplo didático)
import UserLocationMiddleware from '#middleware/user_location_middleware'
import { GeoIpService } from '#services/geoip_service'
import testUtils from '@adonisjs/core/services/test_utils'

const mw = new UserLocationMiddleware(new GeoIpService())
const ctx = testUtils.createHttpContext()

await mw.handle(ctx, () => {
  // next chamado
})
