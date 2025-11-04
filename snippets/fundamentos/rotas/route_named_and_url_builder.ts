import router from '@adonisjs/core/services/router'

router.get('users', () => {}).as('users.index')
router.post('users', () => {}).as('users.store')
router.delete('users/:id', () => {}).as('users.delete')

// construir URL
const url = router.builder().make('users.delete', [123])
console.log(url) // /users/123
