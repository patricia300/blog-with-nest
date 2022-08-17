/* eslint-disable prettier/prettier */
import { Post as Posts } from './entities/post.entity'
import { UpdatePostInput } from './dto/update-post.input'
import { CreatePostInput } from './dto/create-post.input'
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
    ParseUUIDPipe,
} from '@nestjs/common'
import { PostsService } from './posts.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createPostDto: CreatePostInput): Promise<Posts> {
        return this.postsService.create(createPostDto)
    }

    @Get()
    findAll() {
        return this.postsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.postsService.findOne(id)
    }

    @Patch(':id')
    update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() updatePostDto: UpdatePostInput,
    ) {
        return this.postsService.update(id, updatePostDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postsService.remove(id)
    }

    @Get('upvote/:id')
    upvote(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.postsService.upvote(id)
    }

    @Get('downvote/:id')
    downvote(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.postsService.downvote(id)
    }
}
