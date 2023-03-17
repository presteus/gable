import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GableComponentsService } from './gable-components.service';
import { CreateGableComponentDto } from './dto/create-gable-component.dto';
import { UpdateGableComponentDto } from './dto/update-gable-component.dto';

@Controller('gable-components')
export class GableComponentsController {
  constructor(private readonly gableComponentsService: GableComponentsService) {}

  @Post()
  create(@Body() createGableComponentDto: CreateGableComponentDto) {
    return this.gableComponentsService.create(createGableComponentDto);
  }

  @Get()
  findAll() {
    return this.gableComponentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gableComponentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGableComponentDto: UpdateGableComponentDto) {
    return this.gableComponentsService.update(+id, updateGableComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gableComponentsService.remove(+id);
  }
}
