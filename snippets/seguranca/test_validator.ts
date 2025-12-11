import { createUserValidator } from '#validators/auth'
import { test } from '@japa/runner'
import vine from '@vinejs/vine'

test.group('Auth | createUserValidator', () => {
  test('deve recusar senha fraca', async ({ assert }) => {
    const payload = {
      email: 'user@example.com',
      password: '123',
      name: 'User',
    }

    try {
      await vine.validate({
        schema: createUserValidator,
        data: payload,
      })
      assert.fail('era para ter falhado')
    } catch (error) {
      // @ts-ignore - estrutura de erro própria do VineJS
      assert.exists(error.messages)
    }
  })
})
