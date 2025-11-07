// app/validators/post_validator.ts
import vine from '@vinejs/vine'

/** Criação */
export const createPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6),
    slug: vine.string().trim(),
    description: vine.string().trim().escape(),
  })
)

/** Atualização (sem slug) */
export const updatePostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6),
    description: vine.string().trim().escape(),
  })
)
