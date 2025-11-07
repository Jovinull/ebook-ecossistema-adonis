import db from '@adonisjs/lucid/services/db'

const rows = await db.from('users').select('*')
// rows é um array de registros brutos vindos do banco
