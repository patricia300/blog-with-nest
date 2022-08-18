import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { Post } from './entities/post.entity'

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
    ) {}

    create(createPostDto: CreatePostDto): Promise<Post> {
        const newPost = this.postsRepository.create(createPostDto)
        return this.postsRepository.save(newPost)
    }

    findAll(): Promise<Post[]> {
        return this.postsRepository.find()
    }

    findOne(id: string): Promise<Post> {
        return this.postsRepository.findOneByOrFail({ id })
    }

    update(id: string, updatePostDto: UpdatePostDto) {
        return this.postsRepository.update({ id }, updatePostDto)
    }

    async remove(id: string): Promise<Post> {
        return this.postsRepository
            .findOneByOrFail({ id })
            .then(post => this.postsRepository.softRemove(post))
    }

    async upvote(id: string) {
        const post = await this.postsRepository.findOneByOrFail({ id })
        post.upvote += 1
        return this.postsRepository.save(post)
    }

    async downvote(id: string) {
        const post = await this.postsRepository.findOneByOrFail({ id })
        post.downvote += 1
        return this.postsRepository.save(post)
    }
}
