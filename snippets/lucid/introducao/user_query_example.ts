import User from '#models/user'

// Observação: este exemplo assume que exista uma coluna "username"
// na tabela e no modelo. Ajuste conforme seu schema real.
const user = await User.query().where('username', 'rlanz').first()
