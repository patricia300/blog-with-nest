import { ApiProperty } from '@nestjs/swagger'
import { randomInt } from 'crypto'
import {
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm'

@Entity()
@Unique(['author', 'title'])
export class Post {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string

    @Column()
    @ApiProperty()
    title: string

    @Column({ type: 'text', nullable: false })
    @ApiProperty()
    content: string

    @Column()
    @ApiProperty()
    category: string

    @Column({ default: `anonymous@${randomInt(99, 9999)}` })
    @ApiProperty()
    author: string

    @Column('simple-array')
    @ApiProperty()
    tags: string[]

    @Column({ default: false })
    @ApiProperty()
    isPublished: boolean

    @Column({ default: 0 })
    @ApiProperty()
    upvote: number

    @Column({ default: 0 })
    @ApiProperty()
    downvote: number

    @CreateDateColumn()
    @ApiProperty()
    createdDate: Date

    @UpdateDateColumn()
    @ApiProperty()
    updatedDate: Date

    @DeleteDateColumn()
    @ApiProperty()
    deletedDate: Date
}
