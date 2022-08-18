import { Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, MinLength, IsEmail, IsIn } from 'class-validator'

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8)
    password: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({ required: false })
    @IsIn(['writer', 'user'])
    @Field(() => String, { defaultValue: 'user' })
    role: string
}
