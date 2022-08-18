import { UpdateUserInput } from './dto/update-user.input'
import { CreateUserInput } from './dto/create-user.input'
import { UsersService } from './users.service'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './entities/user.entity'

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.usersService.create(createUserInput)
    }

    @Query(() => [User], { name: 'users' })
    findAll() {
        return this.usersService.findAll()
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('id', { type: () => String }) id: string) {
        return this.usersService.findOne(id)
    }

    @Mutation(() => User)
    updateUser(
        @Args('id', { type: () => String }) id: string,
        @Args('updateUserInput') updateUserInput: UpdateUserInput,
    ) {
        return this.usersService.update(id, updateUserInput)
    }

    @Mutation(() => User)
    removeUser(@Args('id', { type: () => String }) id: string) {
        return this.usersService.remove(id)
    }
}
