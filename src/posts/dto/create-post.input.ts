/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePostInput {
  @ApiProperty()
  @IsNotEmpty()
  @Field(() => String)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field(() => String)
  category: string;

  @ApiProperty({ required: false })
  @Field(() => String)
  tags: string;

  @ApiProperty()
  @IsNotEmpty()
  @Field(() => String)
  content: string;

  @ApiProperty({ required: false })
  @Field(() => String)
  author: string;

  @ApiProperty({ required: false })
  @Field(() => Boolean)
  isPublished: boolean;
}
