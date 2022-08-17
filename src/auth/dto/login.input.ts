import { IsNotEmpty, IsString } from 'class-validator'

export class LoginInput {
    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsString()
    password: string
}
