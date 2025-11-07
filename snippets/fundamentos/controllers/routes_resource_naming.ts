// start/routes.ts
import router from '@adonisjs/core/services/router'
const GroupAttributesController = () => import('#controllers/group_attributes_controller')

router.resource('group-attributes', GroupAttributesController).as('attributes')
// gera: attributes.index, attributes.show, ...
