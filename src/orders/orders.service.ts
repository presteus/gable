import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Composant } from 'src/gable-components/entities/gable-component.entity';
import { In } from 'typeorm';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class OrdersService {

  async createOrder(createOrderDto: CreateOrderDto,user:User): Promise<Order | null> {
    const foundComposant = await Composant.findBy({
      id: In(createOrderDto.componentId)
    });
    const newOrder = Order.create({
      components: foundComposant,
      user:user
    })
    const data = await Order.save(newOrder);
    return data
  }



  async findAllOrders(user: User): Promise<Order[] | null> {
    return await Order.find({
      where: {
        user: { id: user.id }
      },
      relations: { user: true, components: true }
    })
  }



  async findOneOrder(orderId: number): Promise<Order | null> {
    const data = await Order.findOne({
      where: { id: orderId },
      relations: { components: true }
    });
    return data
  }



  async updateOrder(orderId: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {

    const data = await Order.findOneBy({ id: orderId });
    if (data === null) {
      return null
    }
    if (updateOrderDto) {
      const foundComposant = await Composant.findBy({
        id: In(updateOrderDto.componentId)
      });
      data.components = foundComposant
      await data.save()
    }
    return data
  }




  async removeOrder(orderId: number): Promise<Order | null> {
    const data = await Order.findOneBy({ id: orderId });
    if (data !== null) {
      await data.remove();
    }
    return data
  }
}
