import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsController } from './posts.controller'
import { Post } from './entities/post.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {}
