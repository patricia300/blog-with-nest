import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsResolver } from './posts.resolver'
import { Post } from './entities/post.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    providers: [PostsResolver, PostsService],
})
export class PostsModule {}
