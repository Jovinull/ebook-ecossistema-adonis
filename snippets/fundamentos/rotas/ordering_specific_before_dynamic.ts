import router from '@adonisjs/core/services/router'

// correto: específica primeiro
router.get('posts/archived', () => {})
router.get('posts/:id', () => {})
