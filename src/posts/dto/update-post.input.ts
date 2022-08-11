/* eslint-disable prettier/prettier */
import { CreatePostInput } from './create-post.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @ApiProperty()
  @Field(() => String)
  id: string;

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

  @ApiProperty({ required: false })
  @IsDate()
  @Field()
  updateAt: Date;
}
