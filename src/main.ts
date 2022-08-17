import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { link } from 'fs'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

    const config = new DocumentBuilder()
        .setTitle('Nest API')
        .setDescription(
            'This is a blog I made with Nest <3, you can test the version REST API of this app here in the documentation,\n but if you want to try graphQL, go <a link="http://127.0.0.1:3000/graphql"> here!!</a>',
        )
        .setVersion('1.0')
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/', app, document)

    await app.listen(3000)
}
bootstrap()
