import { BaseCheck, Result } from '@adonisjs/core/health'
import type { HealthCheckResult } from '@adonisjs/core/types/health'

export class ExampleCheck extends BaseCheck {
  async run(): Promise<HealthCheckResult> {
    const checkPassed = true

    if (checkPassed) {
      return Result.ok('Success message to display')
        .mergeMetaData({ hint: 'custom-meta' })
    }

    return Result.failed('Error message')
  }
}
