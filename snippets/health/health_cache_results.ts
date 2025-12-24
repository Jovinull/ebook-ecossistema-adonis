import {
    DiskSpaceCheck,
    HealthChecks,
    MemoryHeapCheck,
    MemoryRSSCheck,
} from '@adonisjs/core/health'

export const healthChecks = new HealthChecks().register([
  new DiskSpaceCheck().cacheFor('1 hour'),
  new MemoryHeapCheck(),
  new MemoryRSSCheck(),
])
