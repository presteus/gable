import { Injectable } from '@nestjs/common';
import { CreateGableTypeDto } from './dto/create-gable-type.dto';
import { UpdateGableTypeDto } from './dto/update-gable-type.dto';

@Injectable()
export class GableTypesService {
  create(createGableTypeDto: CreateGableTypeDto) {
    return 'This action adds a new gableType';
  }

  findAll() {
    return `This action returns all gableTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gableType`;
  }

  update(id: number, updateGableTypeDto: UpdateGableTypeDto) {
    return `This action updates a #${id} gableType`;
  }

  remove(id: number) {
    return `This action removes a #${id} gableType`;
  }
}
