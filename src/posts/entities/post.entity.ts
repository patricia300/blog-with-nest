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
    id: string

    @Column()
    title: string

    @Column({ type: 'text', nullable: false })
    content: string

    @Column()
    category: string

    @Column({ default: `anonymous@${randomInt(99, 9999)}` })
    author: string

    @Column('simple-array')
    tags: string[]

    @Column({ default: false })
    isPublished: boolean

    @Column({ default: 0 })
    upvote: number

    @Column({ default: 0 })
    downvote: number

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate: Date

    @DeleteDateColumn()
    deletedDate: Date
}
