import { ApplicationService } from '@adonisjs/core/types'
// import { Database } from '#/path/to/database' // exemplo de import, ajuste conforme seu projeto

export default class AppProvider {
    constructor(protected app: ApplicationService) { }

    register() {
        this.app.container.bind('db', () => new Database())
    }

    async boot() {
        this.app.container.resolving('validator', (validator) => {
            validator.rule('foo', () => { })
        })
    }

    async start() { }
    async ready() { }
    async shutdown() { }
}
