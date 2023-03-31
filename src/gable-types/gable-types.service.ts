import { Injectable } from '@nestjs/common';
import { CreateGableTypeDto } from './dto/create-gable-type.dto';
import { UpdateGableTypeDto } from './dto/update-gable-type.dto';

import { Type } from './entities/gable-type.entity'

@Injectable()
export class GableTypesService {
  async createType(createGableTypeDto: CreateGableTypeDto) {
    const newType = Type.create({
      name: createGableTypeDto.name
    });
    const data = await Type.save(newType);
    return data
  };

  async findAllTypes() {
    const data = await Type.find();
    return data
  }

  async findByNametype(name:string){
    return await Type.findOneBy({name:name});
  }

  async findOneType(typeId: number) {
    const data = await Type.findAndCountBy({ id: typeId });
    return data
  }

  async updateType(typeId: number, updateGableTypeDto: UpdateGableTypeDto): Promise<Type | null> {
    const data = await Type.findOneBy({ id: typeId });
    if (data !== null) {
      if (updateGableTypeDto.name)
        data.name = updateGableTypeDto.name;
      await data.save()
    }
    return data
  }


}
