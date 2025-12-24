import type { LockStore } from '@adonisjs/lock/types'

class NoopStore implements LockStore {
  async save(): Promise<boolean> {
    return false
  }
  async delete(): Promise<void> {
    return
  }
  async forceDelete(): Promise<void> {
    return
  }
  async exists(): Promise<boolean> {
    return false
  }
  async extend(): Promise<void> {
    return
  }
}
