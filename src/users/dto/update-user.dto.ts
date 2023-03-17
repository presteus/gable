import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ["prenom"])) { } /* OmitType = on ne veut pas update le pseudo */


/* PartialType prend toute la CreateUserDto et met le tout en optionnel pour UpdateUserDto*/