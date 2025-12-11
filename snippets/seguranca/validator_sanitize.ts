import vine from '@vinejs/vine'

export const createContactValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    email: vine.string().trim().toLowerCase().email(),
    newsletter: vine.boolean().optional(),
  })
)
