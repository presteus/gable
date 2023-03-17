import { Injectable } from '@nestjs/common';
import { CreateGableComponentDto } from './dto/create-gable-component.dto';
import { UpdateGableComponentDto } from './dto/update-gable-component.dto';

@Injectable()
export class GableComponentsService {
  create(createGableComponentDto: CreateGableComponentDto) {
    return 'This action adds a new gableComponent';
  }

  findAll() {
    return `This action returns all gableComponents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gableComponent`;
  }

  update(id: number, updateGableComponentDto: UpdateGableComponentDto) {
    return `This action updates a #${id} gableComponent`;
  }

  remove(id: number) {
    return `This action removes a #${id} gableComponent`;
  }
}
