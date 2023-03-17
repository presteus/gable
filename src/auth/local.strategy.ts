
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService,
        private usersService: UsersService) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string): Promise<User> {
        const isUserExist = await this.usersService.findOneByMail(email)

        if (!isUserExist) throw new BadRequestException("Email incorrect.")
        const user = await this.authService.validateUser(email, password);  /* Grâce à l'auth.service.ts */
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}

