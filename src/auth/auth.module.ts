import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersService } from '../users/users.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AuthController],

  exports: [AuthService],

  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],

  imports: [ConfigModule.forRoot(), UsersModule, PassportModule, JwtModule.register({
    secret: process.env.JWTCONSTANTS,
  }),],
})
export class AuthModule { }
