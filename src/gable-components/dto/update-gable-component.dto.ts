import { PartialType } from '@nestjs/mapped-types';
import { CreateGableComponentDto } from './create-gable-component.dto';

export class UpdateGableComponentDto extends PartialType(CreateGableComponentDto) {}
