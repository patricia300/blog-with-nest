import { Field } from "@nestjs/graphql";
import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['username','email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    @Exclude()
    hash: string;

    @Column()
    email: string;

    @CreateDateColumn()
    @Field()
    createdDate: Date;

    @UpdateDateColumn()
    @Field()
    updatedDate: Date;

    @DeleteDateColumn()
    @Exclude()
    deletedDate: Date;

    constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
 }
