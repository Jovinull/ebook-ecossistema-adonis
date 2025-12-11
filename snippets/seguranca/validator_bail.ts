import vine from '@vinejs/vine'

const schema = vine.object({
  email: vine.string().bail().email(),
})

export const emailWithBailValidator = vine.compile(schema)
