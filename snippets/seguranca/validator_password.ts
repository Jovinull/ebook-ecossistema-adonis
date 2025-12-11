import vine from '@vinejs/vine'

export const passwordRule = vine
  .string()
  .minLength(8)
  .maxLength(64)
  .regex(/[A-Z]/)        // letra maiúscula
  .regex(/[a-z]/)        // letra minúscula
  .regex(/\d/)           // dígito
  .regex(/[^A-Za-z0-9]/) // caractere especial
