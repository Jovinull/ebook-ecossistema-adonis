import router from '@adonisjs/core/services/router'

router.get('users', () => {})
router.post('users', () => {})
router.put('users/:id', () => {})
router.patch('users/:id', () => {})
router.delete('users/:id', () => {})

// responde a todos os métodos padrão
router.any('reports', () => {})

// método custom (ex.: TRACE)
router.route('/', ['TRACE'], () => {})
