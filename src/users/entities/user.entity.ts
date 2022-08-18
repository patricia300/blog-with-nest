import { Field, ObjectType } from '@nestjs/graphql'
import { Exclude } from 'class-transformer'
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
@Unique(['username', 'email'])
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string

    @Column()
    @Field(() => String)
    username: string

    @Column()
    @Exclude()
    hash: string

    @Column()
    @Field(() => String)
    email: string

    @Column({ default: 'user', enum: ['user', 'writer', 'admin'], length: 10 })
    @Field(() => String)
    role: string

    @CreateDateColumn()
    @Field()
    createdDate: Date

    @UpdateDateColumn()
    @Field()
    updatedDate: Date

    @DeleteDateColumn()
    @Exclude()
    @Field()
    deletedDate: Date

    constructor(partial: Partial<User>) {
        Object.assign(this, partial)
    }
}
