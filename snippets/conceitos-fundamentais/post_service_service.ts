import drive from '@adonisjs/drive/services/main'

export class PostService {
    async save(post: Post, coverImage: File) {
        const name = 'cover.jpg'
        const disk = drive.use('s3')
        await disk.put(name, coverImage)
        post.coverImage = name
        await post.save()
    }
}
