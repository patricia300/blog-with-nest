/* eslint-disable prettier/prettier */
import { Post } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) { }
  
  create(createPostInput: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(createPostInput);
    return this.postsRepository.save(newPost);
  }

  findAll(): Promise<Post[]>{
    return this.postsRepository.find();
  }

  findOne(id: string): Promise<Post> {
    return this.postsRepository.findOneByOrFail({ id });
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    return this.postsRepository.update({ id }, updatePostInput);
  }

  async remove(id: string) {
    const removedPost = this.postsRepository
      .findOneByOrFail({ id })
      .then((post) => this.postsRepository.softRemove(post));

    return removedPost;
  }
}
