// app/validators/update_user_validator.ts
import vine from '@vinejs/vine'

export const updateUserValidator = vine.withMetaData<{ userId: number }>().compile(
  vine.object({
    email: vine
      .string()
      .email()
      .unique(async (db, value, field) => {
        const user = await db
          .from('users')
          .whereNot('id', field.meta.userId)
          .where('email', value)
          .first()
        return !user
      }),
  })
)
