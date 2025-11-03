import { Disk } from '@adonisjs/drive'
import { inject } from '@adonisjs/core'

@inject()
export class PostService {
    constructor(protected disk: Disk) { }

    async save(post: Post, coverImage: File) {
        const name = 'cover.jpg'
        await this.disk.put(name, coverImage)
        post.coverImage = name
        await post.save()
    }
}
