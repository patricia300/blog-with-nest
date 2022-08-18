import { JwtAuthGuard } from './jwt-auth.guard'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import {
    ApiBearerAuth,
    ApiBody,
    ApiHeader,
    ApiSecurity,
    ApiTags,
} from '@nestjs/swagger'
import { LoginDto } from './dto/login.dto'

@Controller()
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @UseGuards(LocalAuthGuard)
    @ApiBody({ type: LoginDto })
    @Post('/auth/login')
    async login(@Request() req): Promise<any> {
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}
