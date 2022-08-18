import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsArray, IsBoolean } from 'class-validator'

export class CreatePostDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    category!: string

    @ApiProperty({ required: false })
    @IsArray()
    tags?: string[]

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content!: string

    @ApiProperty({ required: false })
    @IsString()
    author?: string

    @ApiProperty({ required: false })
    @IsBoolean()
    isPublished?: boolean
}
