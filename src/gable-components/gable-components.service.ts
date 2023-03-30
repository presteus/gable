import { Injectable } from '@nestjs/common';
import { CreateGableComponentDto } from './dto/create-gable-component.dto';
import { UpdateGableComponentDto } from './dto/update-gable-component.dto';
import { GableComponent } from './entities/gable-component.entity';

@Injectable()
export class GableComponentsService {
  async create(createGableComponentDto: CreateGableComponentDto) {
    const newComponents = GableComponent.create({
      ...createGableComponentDto
    });
    const data = await GableComponent.save(newComponents);
    return data
  }

  
  async findAll() {
    const data = await GableComponent.find();
    return data
  }


  async findOne(componentId: number) {
    const data = await GableComponent.findOneBy({
      id: componentId
    });
    return data
  }


  async update(componentId: number, updateGableComponentDto: UpdateGableComponentDto): Promise<GableComponent | null> {
    let data = await GableComponent.findOneBy({
      id: componentId
    });

    if (data === null) {
      return null
    }

    if (updateGableComponentDto) {
      data.chipset = updateGableComponentDto.chipset
      data.description = updateGableComponentDto.description
      data.format_alim = updateGableComponentDto.format_alim
      data.format_boitier = updateGableComponentDto.format_boitier
      data.format_cm = updateGableComponentDto.format_cm
      data.hdd_sata = updateGableComponentDto.hdd_sata
      data.marque = updateGableComponentDto.marque
      data.name = updateGableComponentDto.name
      data.pci = updateGableComponentDto.pci
      data.price = updateGableComponentDto.price
      data.ram_capacite = updateGableComponentDto.ram_capacite
      data.ram_frequence = updateGableComponentDto.ram_frequence
      data.ram_number = updateGableComponentDto.ram_number
      data.slot_nvme = updateGableComponentDto.slot_nvme
      data.slot_sata = updateGableComponentDto.slot_sata
      data.socket = updateGableComponentDto.socket
      data.ssd_nvme = updateGableComponentDto.slot_nvme
      data.ssd_sata = updateGableComponentDto.ssd_sata
      await data.save()
    }
  }


  async remove(componentId: number): Promise<GableComponent | null> {
    const data = await GableComponent.findOneBy({ id: componentId });
    if (data !== null) {
      await data.remove();
    }
    return data;
  }
}
