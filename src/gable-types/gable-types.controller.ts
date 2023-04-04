import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GableTypesService } from './gable-types.service';
import { CreateGableTypeDto } from './dto/create-gable-type.dto';
import { UpdateGableTypeDto } from './dto/update-gable-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';

@ApiTags('types')
@Controller('types')
export class GableTypesController {
  constructor(private readonly gableTypesService: GableTypesService) { }

  @Post()
  async create(@Body() createGableTypeDto: CreateGableTypeDto) {
    const verifName = await this.gableTypesService.findByNametype(createGableTypeDto.name)

    if (verifName) {
      throw new ConflictException('Type déja existant')
    };
    const data = await this.gableTypesService.createType(createGableTypeDto);
    return {
      message: 'nouveau type ajouté',
      data: data
    }
  }

  @Get()
  async findAll() {
    const data = await this.gableTypesService.findAllTypes();
    if (data.length != 0) {
      return {
        message: 'liste des types disponible:',
        data: data
      }
    }
    return {
      message: 'aucun type disponible',
      data: data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.gableTypesService.findOneType(+id)
    if (!data) {
      throw new NotFoundException("l'ID ne correspond à aucun type")
    };
    return {
      message: 'types:',
      data: data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateGableTypeDto: UpdateGableTypeDto) {
    const data = await this.gableTypesService.findOneType(+id);
    if (!data) {
      throw new NotFoundException("l'ID ne correspond à aucun type")
    }
    const result = await this.gableTypesService.updateType(id, updateGableTypeDto);
    return {
      message: "type modifié",
      data: result
    }
  }
}
