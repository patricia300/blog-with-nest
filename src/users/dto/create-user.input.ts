import { Field, InputType } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator'
@InputType()
export class CreateUserInput {
    @ApiProperty()
    @IsNotEmpty()
    @Field(() => String)
    username: string

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8)
    @Field(() => String)
    password: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @Field(() => String)
    email: string

    @ApiProperty({ required: false })
    @IsIn(['writer', 'user'])
    @Field(() => String, { defaultValue: 'user' })
    role: string
}
