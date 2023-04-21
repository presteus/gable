import { Injectable } from '@nestjs/common';
import { Type } from 'src/gable-types/entities/gable-type.entity';
import { CreateGableComponentDto } from './dto/create-gable-component.dto';
import { UpdateGableComponentDto } from './dto/update-gable-component.dto';
import { Composant } from './entities/gable-component.entity';

@Injectable()
export class GableComponentsService {
  async create(createGableComponentDto: CreateGableComponentDto) {
    const type = await Type.findOneBy({ id: createGableComponentDto.typeId });

    const compo: any = { ...createGableComponentDto };

    compo.types = type;

    const newComponents = Composant.create({
      ...compo
    });
    const data = await Composant.save(newComponents);
    return data
  }


  async findAll() {
    const data = await Composant.find();
    return data
  }


  async findByName(name: string) {
    return await Composant.findOneBy({ name: name })
  }


  async findComponentsByType(name: string) {
    

    return await Composant.find({
      relations : { types : true },
      where: {
        types: {
          name:name
        }
      }
    })
  }


  async findByMarque(marque: string) {
    return await Composant.findBy({ marque: marque })
  }


  async findOne(componentId: number) {
    const data = await Composant.findOneBy({
      id: componentId
    });
    return data
  }


  async update(componentId: number, updateGableComponentDto: UpdateGableComponentDto): Promise<Composant | null> {
    let data = await Composant.findOneBy({
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
      //data.typeId = updateGableComponentDto.typeId
      await data.save()
    }
    return data
  }


  async remove(componentId: number): Promise<Composant | null> {
    const data = await Composant.findOneBy({ id: componentId });
    if (data !== null) {
      await data.remove();
    }
    return data;
  }
}
