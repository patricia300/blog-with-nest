import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    ClassSerializerInterceptor,
    NotFoundException,
    BadRequestException,
    ParseUUIDPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import {
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger'
import { User } from './entities/user.entity'

@ApiTags('Users')
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiOkResponse({ type: User })
    create(@Body() createUserDto: CreateUserDto) {
        const user = this.usersService.create(createUserDto)
        if (!user) throw new BadRequestException()
        return user
    }

    @Get()
    @ApiOkResponse({ type: [User] })
    findAll() {
        return this.usersService.findAll()
    }

    @Get(':id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiNotFoundResponse({ description: 'Not found' })
    @ApiOkResponse({ type: User })
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        const user = this.usersService.findOne(id)
        if (!user) throw new NotFoundException()
        return user
    }

    @Patch(':id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiNotFoundResponse({ description: 'Not found' })
    @ApiOkResponse({ type: User })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const user = this.usersService.update(id, updateUserDto)
        if (!user) throw new NotFoundException()
        return user
    }

    @Delete(':id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiNotFoundResponse({ description: 'Not found' })
    @ApiOkResponse({ type: User })
    remove(@Param('id') id: string) {
        const user = this.usersService.remove(id)
        if (!user) throw new NotFoundException()
        return user
    }
}
