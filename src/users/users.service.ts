import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  /** 
  *Compare l'email communiqué par l'utilisateur
  */
  async findOneByMail(email: string) {
    return await User.findOneBy({ email: email })
  }


  /** 
  *apres verification de doublon du controller, cree un nouvel utilisateur
  */
  async create(createUserDto: CreateUserDto) {
    const user = await User.create({ ...createUserDto }).save();
    return user;
  }


  /**
  *permet de trouver une user par son ID (fonction admin)
  */
  async findOneById(id: number) {
    return await User.findOneBy({ id: id })
  }


  /** 
   * Pour trouver tous les utilisateurs 
   * */
  async findAllUsers() {
    const data = await User.find();
    return data
  }


  /**
   * pour update un User
   */
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await User.findOneBy({ id })
    if (user !== null) {
      if (updateUserDto.email) user.email = updateUserDto.email /*si le front change l'email*/
      if (updateUserDto.password) user.password = updateUserDto.password/*si le front change le password*/
      if (updateUserDto.nom) user.nom = updateUserDto.nom
      if (updateUserDto.prenom) user.prenom = updateUserDto.prenom
      if (updateUserDto.adresse) user.adresse = updateUserDto.adresse

      return await user.save();
    }

    return null;
  }
}
