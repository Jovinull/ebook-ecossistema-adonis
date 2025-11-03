import { HttpContextFactory } from '@adonisjs/core/factories/http'

const ctx = new HttpContextFactory().create()

export default ctx
