import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsController } from './posts.controller';

@Module({
  providers: [PostsResolver, PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
