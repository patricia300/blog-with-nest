import { ObjectType, Field, Int } from '@nestjs/graphql';
import { randomInt } from 'crypto';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
@Unique([ 'author', 'title' ])
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column({ nullable: false })
  @Field(() => String)
  content: string;

  @Column()
  @Field(() => String)
  category: string;

  @Column({ default: `anonymous@${randomInt(99, 9999)}` })
  @Field(() => String)
  author: string;

  @Column()
  @Field(() => String)
  tags: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isPublished: boolean;

  @Column({ default: 0 })
  @Field(() => Int)
  viewNumber: number;

  @CreateDateColumn()
  @Field()
  createdDate: Date;

  @UpdateDateColumn()
  @Field()
  updatedDate: Date;

  @DeleteDateColumn()
  @Field()
  deletedDate: Date;
}
