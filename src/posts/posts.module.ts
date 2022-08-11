/* eslint-disable prettier/prettier */
import { Post } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsResolver, PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
