// start/routes.ts
import RegisterNewsletterSubscriptionController from '#controllers/register_newsletter_subscription_controller'
import router from '@adonisjs/core/services/router'

router.post('newsletter/subscriptions', [RegisterNewsletterSubscriptionController])
