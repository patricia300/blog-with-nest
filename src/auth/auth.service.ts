import { UsersService } from './../users/users.service'
import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private usersServices: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersServices.findOneByUsername(username)
        const isMatched = await bcrypt.compare(password, user.hash)
        if (user && isMatched) {
            const { hash, ...result } = user
            return result
        }
        return null
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
