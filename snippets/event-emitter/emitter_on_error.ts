import emitter from '@adonisjs/core/services/emitter'

emitter.onError((event, error, eventData) => {
  console.error({ event, error, eventData })
})
