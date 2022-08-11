import { ObjectType, Field, Int } from '@nestjs/graphql';
import { randomInt } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
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

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
  })
  @Field()
  createdAt: Date;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'datetime',
  })
  @Field()
  updateAt: Date;
}
