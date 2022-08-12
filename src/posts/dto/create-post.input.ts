/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  category: string;

  @ApiProperty({ required: false })
  @IsString()
  @Field(() => String)
  tags: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  content: string;

  @ApiProperty({ required: false })
  @Field(() => String)
  author: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @Field(() => Boolean)
  isPublished: boolean;
}
