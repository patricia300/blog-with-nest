import { randomInt } from 'crypto'
import { InputType, Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreatePostInput {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    title: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    category: string

    @ApiProperty({ required: false })
    @IsArray()
    @Field(() => [String], { nullable: 'itemsAndList' })
    tags: string[]

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    content: string

    @ApiProperty({ required: false })
    @Field(() => String, { nullable: true })
    author: string

    @ApiProperty({ required: false })
    @IsBoolean()
    @Field(() => Boolean, { defaultValue: false })
    isPublished: boolean
}
