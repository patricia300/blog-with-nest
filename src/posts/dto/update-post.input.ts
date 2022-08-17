/* eslint-disable prettier/prettier */
import { CreatePostInput } from './create-post.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'
import {
    IsArray,
    IsBoolean,
    IsDate,
    IsNotEmpty,
    IsString,
} from 'class-validator'

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    title: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    category: string

    @ApiProperty({ required: false })
    @IsArray()
    @Field(() => [String], { nullable: 'itemsAndList' })
    tags: string[]

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Field(() => String, { nullable: true })
    content: string

    @ApiProperty({ required: false })
    @Field(() => String, { nullable: true })
    author: string

    @ApiProperty({ required: false })
    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    isPublished: boolean
}
