import { Controller, Post, Body, Patch, ConflictException, UseInterceptors, ClassSerializerInterceptor, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { GetAdmin } from 'src/auth/get-admin.decorator';



@ApiTags('users')
@Controller('users')


@UseInterceptors(
  ClassSerializerInterceptor,/** Cache le mot de passe pour toute la classe UserController*/
)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }



  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const mailExist = await this.usersService.findOneByMail(
      createUserDto.email
    )
    if (mailExist) {
      throw new ConflictException('Ce mail est déjà enregistré.')
    }

    createUserDto.password = await bcrypt.hash( /* Crypte le mot de passe */
      createUserDto.password,
      10
    )
    const data = await this.usersService.create(/* Créé le nouvel utilisateur */
      createUserDto
    )
    return {
      message: `${createUserDto.email} a bien été enregistré`,
      data: data
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: User
  ) {
    if (user !== null) {
      if (updateUserDto.password)
        updateUserDto.password = await bcrypt.hash(
          updateUserDto.password,
          10
        );/* Crypte le nouveau mot de passe s'il est changé dans le front*/
      const updateUser = await this.usersService.updateUser(
        user.id,
        updateUserDto
      );
      return {
        message: 'Votre modification a bien été enregistrée',
        data: updateUser /* Data totale modifiée */
      }
    }
  }


  /*  @Get('findusers')
   async findAll(@GetAdmin() _: User) {
     const data = await this.usersService.findAllUsers();
 
     return {
       message: 'Liste de tout les utilisateurs',
       data: data
     };
   } */
}
