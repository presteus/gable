import { Injectable } from '@nestjs/common';
import { CreateGableTypeDto } from './dto/create-gable-type.dto';
import { UpdateGableTypeDto } from './dto/update-gable-type.dto';

import { GableType } from './entities/gable-type.entity'

@Injectable()
export class GableTypesService {
  async createType(createGableTypeDto: CreateGableTypeDto) {
    const newType = GableType.create({
      name: createGableTypeDto.name
    });
    const data = await GableType.save(newType);
    return data
  };

  async findAllTypes() {
    const data = await GableType.find();
    return data
  }

  async findOneType(typeId: number) {
    const data = await GableType.findAndCountBy({ id: typeId });
    return data
  }

  async updateType(typeId: number, updateGableTypeDto: UpdateGableTypeDto): Promise<GableType | null> {
    const data = await GableType.findOneBy({ id: typeId });
    if (data !== null) {
      if (updateGableTypeDto.name)
        data.name = updateGableTypeDto.name;
      await data.save()
    }
    return data
  }

  async removeType(typeId: number): Promise<GableType | null> {
    const data = await GableType.findOneBy({ id: typeId });
    if (data !== null) {
      await data.remove()
    }
    return data
  }
}
