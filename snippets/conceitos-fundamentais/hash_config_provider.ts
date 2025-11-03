import { configProvider } from '@adonisjs/core'

export default {
    default: 'scrypt',
    list: {
        scrypt: configProvider.create(async (app) => {
            const emitter = await app.container.make('emitter')

            return () => {
                const { Scrypt } = await import('@adonisjs/core/hash/drivers/scrypt')
                return new Scrypt(
                    {
                        cost: 16_384,
                        blockSize: 8,
                        parallelization: 1,
                        maxMemory: 33_554_432,
                    },
                    emitter
                )
            }
        }),
    },
}
