import { PostsModule } from './posts/posts.module'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from 'orm.config'
@Module({
    imports: [TypeOrmModule.forRoot(config), PostsModule],
})
export class AppModule {}
