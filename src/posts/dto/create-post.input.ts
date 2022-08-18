import { InputType, Int, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsString, IsArray, IsBoolean } from 'class-validator'

@InputType()
export class CreatePostInput {
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    title: string

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    category: string

    @IsArray()
    @Field(() => [String], { nullable: 'itemsAndList' })
    tags: string[]

    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    content: string

    @Field(() => String, { nullable: true })
    author: string

    @IsBoolean()
    @Field(() => Boolean, { defaultValue: false })
    isPublished: boolean
}
