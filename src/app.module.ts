import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from 'orm.config'
import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'
@Module({
    imports: [TypeOrmModule.forRoot(config), PostsModule, UsersModule],
})
export class AppModule {}
