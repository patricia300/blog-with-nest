import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    password: string
}
