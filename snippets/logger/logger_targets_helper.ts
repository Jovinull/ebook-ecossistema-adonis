import app from '@adonisjs/core/services/app'
import { targets } from '@adonisjs/core/logger'

{
  loggers: {
    app: {
      transport: {
        targets: targets()
          .pushIf(app.inDev, targets.pretty())
          .pushIf(app.inProduction, targets.file())
          .toArray(),
      },
    },
  },
}
