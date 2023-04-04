import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const data = await this.ordersService.createOrder(createOrderDto);
    return {
      message: "nouvel Order Creer",
      data: data
    }
  }



  @Get()
  async findAll() {
    const data = await this.ordersService.findAllOrders();
    if (data.length != 0) {
      return {
        message: "liste des Orders disponibles:",
        data: data
      }
    }
    return {
      message: "aucun Orders Disponible:",
      data: data
    }
  }



  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.ordersService.findOneOrder(+id);
    if (!data) {
      throw new NotFoundException("L'ID ne correspond a aucun Order")
    }
    return {
      message: 'Order:',
      data: data
    }
  }



  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
    const data = await this.ordersService.updateOrder(+id, updateOrderDto);
    if (!data) {
      throw new NotFoundException("L'ID ne correspond a aucun order");
    }
    const save = await this.update(id, updateOrderDto);
    return {
      message: "order modifie",
      data: save
    }
  }



  @Delete(':id')
  async remove(@Param('id') id: number) {
    const data = await this.ordersService.findOneOrder(+id);
    if (!data) {
      throw new NotFoundException("L'ID ne correspond a aucun Order")
    }
    const remove = await this.ordersService.removeOrder(id);
    return {
      message: "L'order a bien ete supprime",
      data: remove
    }
  }
}
