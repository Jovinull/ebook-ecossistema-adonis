import type { SharedProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/vue3'

const page = usePage<SharedProps>()

page.props.appName                 // string
page.props.propsSharedFromAMiddleware // number
