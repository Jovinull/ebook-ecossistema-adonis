import { HttpContext } from '@adonisjs/core/http'

// implementação
HttpContext.macro('aMethod', function (this: HttpContext) {
    return 'value'
})

HttpContext.getter('aProperty', function (this: HttpContext) {
    return 'value'
})

// tipagem (augmentation)
declare module '@adonisjs/core/http' {
    export interface HttpContext {
        aMethod: () => string
        aProperty: string
    }
}
