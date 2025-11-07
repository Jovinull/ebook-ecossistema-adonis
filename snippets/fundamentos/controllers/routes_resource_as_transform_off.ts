// start/routes.ts
import router from '@adonisjs/core/services/router'
const GroupAttributesController = () => import('#controllers/group_attributes_controller')

router
  .resource('group-attributes', GroupAttributesController)
  .as('groupAttributes', false)
// mantém "groupAttributes.index" sem transformar em snake_case
