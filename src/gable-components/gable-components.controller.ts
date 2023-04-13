import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GableComponentsService } from './gable-components.service';
import { CreateGableComponentDto } from './dto/create-gable-component.dto';
import { UpdateGableComponentDto } from './dto/update-gable-component.dto';
import { ApiTags } from '@nestjs/swagger';
import { ConflictException, NotFoundException } from '@nestjs/common/exceptions';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { GetAdmin } from 'src/auth/get-admin.decorator';
import { User } from 'src/users/entities/user.entity';



@ApiTags('components')
@Controller('components')
export class GableComponentsController {
  constructor(private readonly gableComponentsService: GableComponentsService) { }


  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createGableComponentDto: CreateGableComponentDto, @GetAdmin() _: User) {
    const verifName = await this.gableComponentsService.findByName(createGableComponentDto.name)

    if (verifName) {
      throw new ConflictException('Composant deja éxistant')
    };
    const newComponent = await this.gableComponentsService.create(createGableComponentDto);
    return {
      message: 'nouveau composant ajouté',
      data: newComponent
    }
  }



  @Get()
  async findAll() {
    const data = await this.gableComponentsService.findAll();

    if (data.length != 0) {
      return {
        message: "liste des composants disponible",
        data: data
      }
    }
    return {
      message: "aucun composant disponible",
      data: data
    }
  }



  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.gableComponentsService.findOne(+id)

    if (!data) {
      throw new NotFoundException("l'ID ne correspond à aucun composant")
    };
    return {
      message: 'Composant:',
      data: data
    }
  }



  @Post('marque')
  async findMarque(@Body() marque: { marque: string }) {
    const data = await this.gableComponentsService.findByMarque(marque.marque)

    if (data.length === 0) {
      throw new NotFoundException("Aucun composant de cette marque dans la base de donnée")
    }
    return {
      message: "composants de cette marque:",
      data: data
    }
  }



  @Post('type')
  async findByType(@Body() body: { typeId: number }) {
    const data = await this.gableComponentsService.findComponentsByType(body.typeId)
    if (data.length === 0) {
      throw new NotFoundException('Aucun composant de ce type dans la Base de donnée')
    }
    return {
      message: "composant de ce type:",
      data: data
    }
  }



  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: number, @Body() updateGableComponentDto: UpdateGableComponentDto, @GetAdmin() _: User) {
    const data = await this.gableComponentsService.findOne(+id);
    if (!data) {
      throw new NotFoundException("l'ID ne correspond à aucun composants")
    }
    const result = await this.gableComponentsService.update(data.id, updateGableComponentDto);
    return {
      message: "Composant modifié",
      data: result,

    }


  }



  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: number, @GetAdmin() _: User) {
    const data = await this.gableComponentsService.findOne(+id);

    if (!data) {
      throw new NotFoundException("l'ID ne correspond à aucun composant")
    }
    const remove = await this.gableComponentsService.remove(id)
    return {
      message: "Le composant à bien été supprimé",
      data: remove
    }
  }
}
