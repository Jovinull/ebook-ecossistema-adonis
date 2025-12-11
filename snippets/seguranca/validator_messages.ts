import vine from '@vinejs/vine'

const schema = vine.object({
  email: vine.string().email(),
})

export const loginValidator = vine.compile(schema).messages({
  'email.required': 'Informe um e-mail',
  'email.email': 'E-mail inválido',
})
