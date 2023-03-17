import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService,JwtService, AuthService]
})
export class UsersModule {}
