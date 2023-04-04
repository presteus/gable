import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Composant } from 'src/gable-components/entities/gable-component.entity';
import { In } from 'typeorm';


@Injectable()
export class OrdersService {

  async createOrder( createOrderDto: CreateOrderDto): Promise<Order | null> {
    const foundComposant= await Composant.findBy({
      id:In(createOrderDto.componentId)
    });
    const newOrder = Order.create({
      created_at: createOrderDto.created_at,
      components: foundComposant
    })
    const data = await Order.save(newOrder);
    return data
  }



  async findAllOrders(): Promise<Order[] | null> {
    return await Order.find({
      relations: { user: true, components: true }
    })
  }



  async findOneOrder(orderId: number): Promise<Order | null> {
    const data = await Order.findOneBy({ id: orderId });
    return data
  }



  /* async updateOrder(orderId: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {
    const data = await Order.findOneBy({ id: orderId });
    if (data === null) {
      return null
    }
    if (updateOrderDto) {
      data.updated_at = updateOrderDto.updated_at,
        data.components = updateOrderDto.componentId
      await data.save()
    }
    return data
  } */




  async removeOrder(orderId: number): Promise<Order | null> {
    const data = await Order.findOneBy({ id: orderId });
    if (data !== null) {
      await data.remove();
    }
    return data
  }
}
