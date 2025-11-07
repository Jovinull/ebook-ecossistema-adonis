import type {
  SessionData,
  SessionStoreContract,
  SessionStoreFactory,
} from '@adonisjs/session/types'

// Config esperada para a store
export type MongoDbConfig = {
  // connection string, collection, etc.
}

export class MongoDbStore implements SessionStoreContract {
  constructor(public config: MongoDbConfig) {}

  async read(sessionId: string): Promise<SessionData | null> {
    // buscar por sessionId e retornar objeto ou null
    return null
  }

  async write(sessionId: string, data: SessionData): Promise<void> {
    // serializar e persistir
  }

  async destroy(sessionId: string): Promise<void> {
    // remover registro
  }

  async touch(sessionId: string): Promise<void> {
    // renovar expiração
  }
}

// Factory para usar no config
export function mongoDbStore(config: MongoDbConfig): SessionStoreFactory {
  return () => {
    return new MongoDbStore(config)
  }
}
