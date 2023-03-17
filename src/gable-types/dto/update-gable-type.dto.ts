import { PartialType } from '@nestjs/mapped-types';
import { CreateGableTypeDto } from './create-gable-type.dto';

export class UpdateGableTypeDto extends PartialType(CreateGableTypeDto) {}
