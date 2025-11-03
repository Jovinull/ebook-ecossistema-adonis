import drive from '@adonisjs/drive/services/main'
import { PostService } from '#services/post_service'

test('save post', async ({ assert }) => {
    drive.fake('s3') // substitui por driver em memória

    const postService = new PostService()
    await postService.save(post, coverImage)

    assert.isTrue(await drive.use('s3').exists('cover.jpg'))

    drive.restore('s3') // restaura implementação real
})
