// app/validators/mixed_sources_validator.ts
import vine from '@vinejs/vine'

export const mixedSourcesValidator = vine.compile(
  vine.object({
    // body
    username: vine.string(),
    password: vine.string(),

    // cookies
    cookies: vine.object({}).allowUnknownProperties(),

    // headers
    headers: vine.object({}).allowUnknownProperties(),

    // route params
    params: vine.object({
      id: vine.string(),
    }),
  })
)
