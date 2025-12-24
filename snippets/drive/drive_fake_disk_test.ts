import drive from '@adonisjs/drive/services/main'
import { test } from '@japa/runner'
import fileGenerator from '@poppinss/file-generator'

test.group('Users | update', () => {
  test('should be able to update my avatar', async ({ client, cleanup }) => {
    const fakeDisk = drive.fake('spaces')
    cleanup(() => drive.restore('spaces'))

    const { contents, mime, name } = await fileGenerator.generatePng('1mb')

    await client
      .put('me')
      .file('avatar', contents, {
        filename: name,
        contentType: mime,
      })

    fakeDisk.assertExists('expected/key/here.png')
  })
})
