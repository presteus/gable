import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';


@Injectable()
export class OrdersService {

  async create(createOrderDto: CreateOrderDto): Promise<Order | null> {
    const order = new Order()
    order.created_at = createOrderDto.created_at
    await order.save()
    return order
  }



  async findAll(): Promise<Order[] | null> {
    return await Order.find({
      relations: { user: true, components: true }
    })
  }



  async findOne(orderId: number): Promise<Order | null> {
    const data = await Order.findOneBy({ id: orderId });
    return data
  }



  async update(orderId: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {
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
  }




  async remove(orderId: number): Promise<Order | null> {
    const data = await Order.findOneBy({ id: orderId });
    if (data !== null) {
      await data.remove();
    }
    return data
  }
}
