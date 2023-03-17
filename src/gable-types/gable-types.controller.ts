import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GableTypesService } from './gable-types.service';
import { CreateGableTypeDto } from './dto/create-gable-type.dto';
import { UpdateGableTypeDto } from './dto/update-gable-type.dto';

@Controller('gable-types')
export class GableTypesController {
  constructor(private readonly gableTypesService: GableTypesService) {}

  @Post()
  create(@Body() createGableTypeDto: CreateGableTypeDto) {
    return this.gableTypesService.create(createGableTypeDto);
  }

  @Get()
  findAll() {
    return this.gableTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gableTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGableTypeDto: UpdateGableTypeDto) {
    return this.gableTypesService.update(+id, updateGableTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gableTypesService.remove(+id);
  }
}
