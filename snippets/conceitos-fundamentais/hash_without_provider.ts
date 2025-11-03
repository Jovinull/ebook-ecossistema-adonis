import { Scrypt } from '@adonisjs/core/hash/drivers/scrypt'

export default {
    default: 'scrypt',
    list: {
        scrypt: () =>
            new Scrypt({
                cost: 16_384,
                blockSize: 8,
                parallelization: 1,
                maxMemory: 33_554_432,
            }),
    },
}
