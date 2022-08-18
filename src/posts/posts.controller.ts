import { Post as Article } from './entities/post.entity'
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseUUIDPipe,
    BadRequestException,
    NotFoundException,
    Put,
} from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import {
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger'
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiOkResponse({ type: Article })
    async create(@Body() createPostDto: CreatePostDto) {
        const post = await this.postsService.create(createPostDto)
        if (!post) throw new BadRequestException()
        return post
    }

    @Get()
    @ApiOkResponse({ type: [Article] })
    findAll() {
        return this.postsService.findAll()
    }

    @Get(':id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiNotFoundResponse({ description: 'Not found post' })
    @ApiOkResponse({ type: Article })
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        const post = await this.postsService.findOne(id)
        if (!post) throw new NotFoundException()
        return post
    }

    @Patch(':id')
    @ApiNotFoundResponse({ description: 'Not found post' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiOkResponse({ type: Article })
    async update(
        @Param('id') id: string,
        @Body() updatePostDto: UpdatePostDto,
    ) {
        const post = await this.postsService.update(id, updatePostDto)
        if (!post) throw new NotFoundException()
        return post
    }

    @Delete(':id')
    @ApiNotFoundResponse({ description: 'Not found post' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiOkResponse({ type: Article })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.postsService.remove(id)
    }

    @Get('upvote/:id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiNotFoundResponse({ description: 'Not found post' })
    @ApiOkResponse({ type: Article })
    upvote(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.postsService.upvote(id)
    }

    @Get('downvote/:id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiNotFoundResponse({ description: 'Not found post' })
    @ApiOkResponse({ type: Article })
    downvote(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.postsService.downvote(id)
    }
}
