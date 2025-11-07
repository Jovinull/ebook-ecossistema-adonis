// app/validators/avatar_validator.ts
import vine from '@vinejs/vine'

export const uploadAvatarValidator = vine.compile(
  vine.object({
    avatar: vine
      .file({
        size: '2mb', // limite de tamanho
        extnames: ['jpg', 'jpeg', 'png', 'webp'], // extensões permitidas
      })
      .optional(), // exemplo: opcional
  })
)
