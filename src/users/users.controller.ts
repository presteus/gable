import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('users')
@Controller('users')

 /**
   * Cache le mot de passe pour toute la classe UserController
    */
@UseInterceptors(
  ClassSerializerInterceptor,
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





  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
