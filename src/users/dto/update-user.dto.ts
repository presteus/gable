import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) { }


/* PartialType prend toute la CreateUserDto et met le tout en optionnel pour UpdateUserDto*/