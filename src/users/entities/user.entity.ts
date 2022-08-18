import { Field } from '@nestjs/graphql'
import { ApiProperty } from '@nestjs/swagger'
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
export class User {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string

    @Column()
    @ApiProperty()
    username: string

    @Column()
    @Exclude()
    hash: string

    @Column()
    @ApiProperty()
    email: string

    @Column({ default: 'user', enum: ['user', 'writer', 'admin'], length: 10 })
    @ApiProperty()
    role: string

    @CreateDateColumn()
    @ApiProperty()
    createdDate: Date

    @UpdateDateColumn()
    @ApiProperty()
    updatedDate: Date

    @DeleteDateColumn()
    @Exclude()
    deletedDate: Date

    constructor(partial: Partial<User>) {
        Object.assign(this, partial)
    }
}
