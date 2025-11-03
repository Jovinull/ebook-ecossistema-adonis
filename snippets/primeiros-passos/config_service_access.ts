import config from '@adonisjs/core/services/config'

const key = config.get('app.appKey')
const dbConnection = config.get('database.connection')
